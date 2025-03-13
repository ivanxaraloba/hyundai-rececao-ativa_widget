import {
  ConfigProps,
  configSchema,
  FieldRowProps,
  SectionProps,
  VariantsProps,
} from '@/types/types.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { VARIANT } from '@/utils/constants';

export const useFormBuilder = (config: ConfigProps | null) => {
  const form = useForm<ConfigProps>({
    resolver: zodResolver(configSchema),
    defaultValues: { ...config },
  });

  // Sections
  const addSection = () => {
    const sections = form.getValues('sections') || [];
    const newSection: SectionProps = {
      id: `section_${Date.now()}_${sections.length + 1}`,
      label: 'New Section',
      fields: [],
    };
    form.setValue('sections', [...sections, newSection]);
  };

  const removeSection = (sectionId: string) => {
    const updatedSections = form
      .getValues('sections')
      .filter((section) => section.id !== sectionId);
    form.setValue('sections', updatedSections);
  };

  const editSection = (updatedSection: SectionProps) => {
    const updatedSections = form
      .getValues('sections')
      .map((section) =>
        section.id === updatedSection.id
          ? { ...section, label: updatedSection.label, fields: updatedSection.fields }
          : section,
      );
    form.setValue('sections', updatedSections);
  };

  const reorderSection = (newOrder: SectionProps[]) => {
    form.setValue(
      'sections',
      newOrder.filter(
        (section, index, self) => index === self.findIndex((s) => s.id === section.id),
      ),
    );
  };

  // Fields
  const addField = (sectionId: string, variant: VariantsProps, rowIndex?: number) => {
    const sections = form.getValues('sections');
    const updatedSections = sections.map((section) => {
      if (section.id !== sectionId) return section;

      const newField: FieldRowProps = {
        id: `field_${variant}_${Date.now()}`,
        variant,
        label: VARIANT[variant].label,
        required: false,
        disabled: false,
      };

      const updatedFields = [...section.fields];
      if (rowIndex === undefined || rowIndex >= updatedFields.length) {
        updatedFields.push([newField]);
      } else {
        updatedFields[rowIndex] = [...updatedFields[rowIndex], newField];
      }

      return { ...section, fields: updatedFields };
    });

    form.setValue('sections', updatedSections);
  };

  const removeField = (sectionId: string, rowIndex: number, fieldId: string) => {
    const updatedSections = form.getValues('sections').map((section) => {
      if (section.id !== sectionId) return section;

      const updatedFields = section.fields
        .map((row, idx) => (idx === rowIndex ? row.filter((field) => field.id !== fieldId) : row))
        .filter((row) => row.length > 0);

      return { ...section, fields: updatedFields };
    });

    form.setValue('sections', updatedSections);
  };

  const editField = (updatedField: FieldRowProps) => {
    const updatedSections = form.getValues('sections').map((section) => ({
      ...section,
      fields: section.fields.map((row) =>
        row.map((field) => (field.id === updatedField.id ? { ...field, ...updatedField } : field)),
      ),
    }));

    form.setValue('sections', updatedSections);
  };

  const reorderFields = (sectionId: string, newOrder: FieldRowProps[][]) => {
    const updatedSections = form.getValues('sections').map((section) =>
      section.id === sectionId
        ? {
            ...section,
            fields: newOrder.filter(
              (field, index, self) => index === self.findIndex((f) => f[0].id === field[0].id),
            ),
          }
        : section,
    );

    form.setValue('sections', updatedSections);
  };

  const moveField = (sourceSecId: string, targetSecId: string, fieldId: string, dropY?: number) => {
    if (sourceSecId === targetSecId) return;

    // Get the current sections and find the source and target sections
    const sections = form.getValues('sections');
    const sourceSection = sections.find((s) => s.id === sourceSecId);
    const targetSection = sections.find((s) => s.id === targetSecId);

    if (!sourceSection || !targetSection) return;

    // Find the field to be moved from the source section
    let movedField: FieldRowProps | undefined;
    sourceSection.fields = sourceSection.fields
      .map((row) => {
        if (row[0].id === fieldId) {
          movedField = row[0]; // Assuming the field is in the first position of the row
          return []; // Remove the row from the source section
        }
        return row;
      })
      .filter((row) => row.length > 0);

    if (!movedField) return;

    // Determine where to insert the moved field in the target section
    let targetIndex = targetSection.fields.length;
    if (typeof dropY === 'number') {
      // Handle drop logic (optional, only if dropY is provided)
      const targetSectionEl = document.querySelector(`[data-section-id="${targetSecId}"]`);
      if (targetSectionEl) {
        const fieldElements = targetSectionEl.querySelectorAll('[data-field-row]');
        targetIndex = fieldElements.length;

        for (let i = 0; i < fieldElements.length; i++) {
          const rect = fieldElements[i].getBoundingClientRect();
          if (dropY < rect.top + rect.height / 2) {
            targetIndex = i;
            break;
          }
        }
      }
    }

    // Add the moved field to the target section at the correct index
    if (targetIndex !== undefined) {
      const targetRow = targetSection.fields[targetIndex] || [];
      targetRow.push(movedField);
      targetSection.fields.splice(targetIndex, 0, targetRow);
    } else {
      // If no specific index, append it at the end
      targetSection.fields.push([movedField]);
    }

    // Update the form state with the modified sections
    form.setValue('sections', [...sections]);
  };

  return {
    form,
    sections: {
      add: addSection,
      remove: removeSection,
      edit: editSection,
      reorder: reorderSection,
    },
    fields: {
      add: addField,
      remove: removeField,
      edit: editField,
      reorder: reorderFields,
      move: moveField,
    },
  };
};
