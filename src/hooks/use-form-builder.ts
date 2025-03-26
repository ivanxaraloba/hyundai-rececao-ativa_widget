import { useState } from 'react';

import { ConfigProps, FieldRowProps, SectionProps, VariantsProps } from '@/types/types.config';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { useGlobalStore } from '@/stores/global';
import { CREATOR_FORM_CONFIG, VARIANT } from '@/utils/constants';

export const useFormBuilder = () => {
  const { config: cfg, setConfig: setCfg, recordId } = useGlobalStore();
  const [config, setConfig] = useState<ConfigProps | null>(
    cfg || {
      logo: '',
      sections: [
        {
          id: `section_${Date.now()}_1`,
          label: 'New Section',
          fields: [],
        },
      ],
    },
  );

  const addSection = () => {
    setConfig((prevConfig) => {
      if (prevConfig) {
        const newSection: SectionProps = {
          id: `section_${Date.now()}_${prevConfig.sections.length + 1}`,
          label: 'New Section',
          fields: [],
        };

        return {
          ...prevConfig,
          sections: [...prevConfig.sections, newSection],
        };
      }
      return prevConfig;
    });
  };

  const addField = (sectionId: string, variant: VariantsProps, rowIndex?: number) => {
    setConfig((prevConfig) => {
      if (prevConfig) {
        const updatedSections = prevConfig.sections.map((section) => {
          if (section.id !== sectionId) return section;

          const newField = {
            id: `field_${variant}_${Date.now()}`,
            variant,
            label: VARIANT[variant].label,
            required: false,
            disabled: false,
          } as FieldRowProps;

          const updatedFields = [...section.fields];

          if (rowIndex === undefined || rowIndex >= updatedFields.length) {
            updatedFields.push([newField]);
          } else {
            updatedFields[rowIndex] = [...updatedFields[rowIndex], newField];
          }

          return { ...section, fields: updatedFields };
        });

        return {
          ...prevConfig,
          sections: updatedSections,
        };
      }
      return prevConfig;
    });
  };

  const removeSection = (sectionId: string) => {
    setConfig((prevConfig) => {
      if (prevConfig) {
        const updatedSections = prevConfig.sections.filter((section) => section.id !== sectionId);

        return {
          ...prevConfig,
          sections: updatedSections,
        };
      }
      return prevConfig;
    });
  };

  const editSection = (updatedSection: SectionProps) => {
    setConfig((prevConfig) => {
      if (prevConfig) {
        const updatedSections = prevConfig.sections.map((section) =>
          section.id === updatedSection.id
            ? {
                ...section,
                label: updatedSection.label,
                fields: updatedSection.fields,
              }
            : section,
        );

        return {
          ...prevConfig,
          sections: updatedSections,
        };
      }
      return prevConfig;
    });
  };

  const editField = (updatedField: FieldRowProps, oldFieldId: FieldRowProps['id']) => {
    setConfig((prevConfig) => {
      if (prevConfig) {
        const updatedSections = prevConfig.sections.map((section) => ({
          ...section,
          fields: section.fields.map((row) =>
            row.map((field) => (field.id === oldFieldId ? { ...field, ...updatedField } : field)),
          ),
        }));

        return {
          ...prevConfig,
          sections: updatedSections,
        };
      }
      return prevConfig;
    });
  };

  const removeField = (sectionId: string, rowIndex: number, fieldId: string) => {
    setConfig((prevConfig) => {
      if (prevConfig) {
        const updatedSections = prevConfig.sections.map((section) => {
          if (section.id !== sectionId) return section;

          const updatedFields = section.fields
            .map((row, idx) =>
              idx === rowIndex ? row.filter((field) => field.id !== fieldId) : row,
            )
            .filter((row) => row.length > 0);

          return { ...section, fields: updatedFields };
        });

        return {
          ...prevConfig,
          sections: updatedSections,
        };
      }
      return prevConfig;
    });
  };

  const moveField = (sourceSecId: string, targetSecId: string, fieldId: string, dropY?: number) => {
    if (sourceSecId === targetSecId) return;
    setConfig((prevConfig) => {
      if (prevConfig) {
        const newBuild = [...prevConfig.sections];
        const sourceSection = newBuild.find((s) => s.id === sourceSecId)!;
        const targetSection = newBuild.find((s) => s.id === targetSecId)!;

        // Find and remove field from source
        let movedField: FieldRowProps[] | undefined;
        sourceSection.fields = sourceSection.fields.filter((row) => {
          if (row[0].id === fieldId) {
            movedField = row;
            return false;
          }
          return true;
        });

        if (!movedField) return { ...prevConfig, sections: newBuild };

        // Calculate target index based on dropY if provided
        let targetIndex: number | undefined;
        if (typeof dropY === 'number') {
          const targetSectionEl = document.querySelector(`[data-section-id="${targetSecId}"]`);
          if (targetSectionEl) {
            const fieldElements = targetSectionEl.querySelectorAll('[data-field-row]');
            targetIndex = fieldElements.length; // Default to end

            for (let i = 0; i < fieldElements.length; i++) {
              const rect = fieldElements[i].getBoundingClientRect();
              if (dropY < rect.top + rect.height / 2) {
                targetIndex = i;
                break;
              }
            }
          }
        }

        // Add to target at specific position or end
        if (targetIndex !== undefined) {
          targetSection.fields.splice(targetIndex, 0, movedField);
        } else {
          targetSection.fields.push(movedField);
        }

        return {
          ...prevConfig,
          sections: newBuild,
        };
      }
      return prevConfig;
    });
  };

  const reorderSection = (newOrder: SectionProps[]) => {
    setConfig((prevConfig) => {
      if (prevConfig) {
        const uniqueSections = newOrder.filter(
          (section, index, self) => index === self.findIndex((s) => s.id === section.id),
        );

        return {
          ...prevConfig,
          sections: uniqueSections,
        };
      }
      return prevConfig;
    });
  };

  const reorderFields = (sectionId: string, newOrder: FieldRowProps[][]) => {
    setConfig((prevConfig) => {
      if (prevConfig) {
        const updatedSections = prevConfig.sections.map((section) =>
          section.id === sectionId
            ? {
                ...section,
                fields: newOrder.filter(
                  (field, index, self) => index === self.findIndex((f) => f[0].id === field[0].id),
                ),
              }
            : section,
        );

        return {
          ...prevConfig,
          sections: updatedSections,
        };
      }
      return prevConfig;
    });
  };

  const mutationSave = useMutation({
    mutationFn: async () => {
      if (!recordId) return;

      const response = await ZOHO.CREATOR.API.updateRecord({
        appName: CREATOR_FORM_CONFIG.appName,
        reportName: CREATOR_FORM_CONFIG.reportName,
        id: recordId,
        data: {
          data: {
            config_1: config,
          },
        },
      });

      if (response?.code !== 3000) throw new Error(response?.message);
    },
    onSuccess: async () => {
      toast.success('Configuração guardada com sucesso');
      setCfg(config as any);
    },
    onError: (err) => {
      toast.error('Erro ao guardar a configuração');
      console.log({ err });
    },
  });

  return {
    config,
    setConfig,
    fields: {
      add: addField,
      remove: removeField,
      edit: editField,
      move: moveField,
      reorder: reorderFields,
    },
    sections: {
      add: addSection,
      remove: removeSection,
      edit: editSection,
      reorder: reorderSection,
    },
    mutationSave,
  };
};
