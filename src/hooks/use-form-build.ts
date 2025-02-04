import { useState } from 'react';

import { FieldProps, SectionProps } from '@/types/types.form-builder';

export const useFormBuild = () => {
  const [formBuild, setFormBuild] = useState<SectionProps[]>([]);

  const addSection = () => {
    setFormBuild((prev) => [
      ...prev,
      {
        id: `section_${Date.now()}`,
        label: 'New Section',
        fields: [],
      },
    ]);
  };

  const addField = (sectionId: string, variant: string, rowIndex?: number) => {
    setFormBuild((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId) return section;

        const newField = {
          id: `field_${variant}_${Date.now()}`,
          variant,
          label: variant,
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
      }),
    );
  };

  const removeField = (
    sectionId: string,
    rowIndex: number,
    fieldId: string,
  ) => {
    setFormBuild((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId) return section;

        const updatedFields = section.fields
          .map((row, idx) =>
            idx === rowIndex
              ? row.filter((field) => field.id !== fieldId)
              : row,
          )
          .filter((row) => row.length > 0);

        return { ...section, fields: updatedFields };
      }),
    );
  };

  const removeSection = (sectionId: string) => {
    setFormBuild((prev) => prev.filter((section) => section.id !== sectionId));
  };

  const editSection = (updatedSection: SectionProps) => {
    setFormBuild((prev) =>
      prev.map((section) =>
        section.id === updatedSection.id
          ? {
              ...section,
              label: updatedSection.label,
              fields: updatedSection.fields,
            }
          : section,
      ),
    );
  };

  const editField = (updatedField: FieldProps) => {
    setFormBuild((prev) =>
      prev.map((section) => ({
        ...section,
        fields: section.fields.map((row) =>
          row.map((field) =>
            field.id === updatedField.id
              ? { ...field, ...updatedField }
              : field,
          ),
        ),
      })),
    );
  };

  return {
    formBuild,
    fields: {
      add: addField,
      remove: removeField,
      edit: editField,
    },
    sections: {
      add: addSection,
      remove: removeSection,
      edit: editSection,
    },
  };
};

