'use client';

import React, { useState } from 'react';

import { useFormBuilder } from '@/hooks/use-form-builder';
import {
  ConfigProps,
  configSchema,
  FieldRowProps,
  mapSchema,
  SectionProps,
  sectionSchema,
} from '@/types/types.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Reorder, useDragControls } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import ButtonLoading from '@/components/ui/button-loading';
import { Form } from '@/components/ui/form';
import { H2, H3, H4, Muted } from '@/components/ui/typography';
import { useGlobalStore } from '@/stores/global';
import { CREATOR_FORM_CONFIG } from '@/utils/constants';
import { DialogUpdateField } from './_components/dialog-update-field';
import DialogUpdateFieldMaps from './_components/dialog-update-field-maps';
import { DialogUpdateSection } from './_components/dialog-update-section';
import DropdownFields from './_components/dropdown-fields';
import RowField from './_components/row-fields';
import Section from './_components/section';

export type RowActionProps =
  | {
      type: 'field';
      action: 'update' | 'delete';
      item: FieldRowProps;
    }
  | {
      type: 'section';
      action: 'update' | 'delete';
      item: SectionProps;
    };

export default function PageFormBuilder() {
  const [rowAction, setRowAction] = useState<RowActionProps | null>(null);
  const { config, fields, sections, mutationSave } = useFormBuilder();

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const toggleAllSections = () => {
    const sections = config?.sections || [];
    const areAllOpen = sections.every((section) => openSections[section.id]);
    const newState = sections.reduce(
      (acc, section) => ({
        ...acc,
        [section.id]: !areAllOpen,
      }),
      {},
    );
    setOpenSections(newState);
  };

  return (
    <div className="space-y-10 md:px-28">
      <div className="flex justify-between items-center">
        <div>
          <H3>Configurador</H3>
          <Muted>Configure o formulário e os mapas de dano</Muted>
        </div>
        <Button type="button" variant="outline" onClick={toggleAllSections}>
          {config?.sections.every((section) => openSections[section.id]) ? (
            <>
              <span>Collapse All</span>
              <ChevronUp />
            </>
          ) : (
            <>
              <span>Expand All</span>
              <ChevronDown />
            </>
          )}
        </Button>
      </div>

      <Reorder.Group
        axis="y"
        values={config?.sections || []}
        onReorder={sections.reorder}
        className="space-y-4"
      >
        {config?.sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            removeSection={sections.remove}
            setRowAction={setRowAction}
            open={openSections[section.id]}
            onOpenChange={(open) => setOpenSections((prev) => ({ ...prev, [section.id]: open }))}
          >
            <Reorder.Group
              axis="y"
              values={section.fields}
              onReorder={(newOrder) => fields.reorder(section.id, newOrder)}
              className="space-y-2"
            >
              {section.fields.map((rowFields: FieldRowProps[], rowIndex: number) => (
                <RowField
                  key={rowFields[0].id}
                  rowFields={rowFields}
                  removeField={(fieldId) => fields.remove(section.id, rowIndex, fieldId)}
                  setRowAction={setRowAction}
                  value={rowFields}
                  onFieldDrop={(e) => {
                    const targetSectionId = e.target
                      .closest("[data-section-id]:not([data-section-id=''])")
                      .getAttribute('data-section-id');

                    if (!targetSectionId) return;

                    fields.move(section.id, targetSectionId, rowFields[0].id, e.clientY);
                  }}
                >
                  <DropdownFields
                    onSelect={(variantValue) => fields.add(section.id, variantValue, rowIndex)}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="min-w-9 w-9 h-9 rounded-full"
                    >
                      +
                    </Button>
                  </DropdownFields>
                </RowField>
              ))}
            </Reorder.Group>
            <div className="w-fit mx-auto">
              <DropdownFields onSelect={(variantValue) => fields.add(section.id, variantValue)}>
                <Button type="button" variant="outline" className="rounded-full text-xs">
                  Add Field +
                </Button>
              </DropdownFields>
            </div>
          </Section>
        ))}
      </Reorder.Group>

      <div className="w-full flex justify-center">
        <Button
          type="button"
          variant="outline"
          className="rounded-full text-xs"
          onClick={() => sections.add()}
        >
          Add Section +
        </Button>
      </div>

      {rowAction?.type === 'section' ? (
        <DialogUpdateSection
          open={rowAction?.action === 'update'}
          onOpenChange={() => setRowAction(null)}
          section={rowAction?.item}
          onSuccess={sections.edit}
        />
      ) : rowAction?.type === 'field' && rowAction.item.variant !== 'maps' ? (
        <DialogUpdateField
          open={rowAction?.action === 'update'}
          onOpenChange={() => setRowAction(null)}
          field={rowAction?.item}
          onSuccess={fields.edit}
        />
      ) : (
        rowAction?.type === 'field' &&
        rowAction.item.variant === 'maps' && (
          <DialogUpdateFieldMaps
            open={rowAction?.action === 'update'}
            onOpenChange={() => setRowAction(null)}
            field={rowAction?.item}
            onSuccess={fields.edit}
          />
        )
      )}

      <div className="sticky bottom-4 flex justify-center">
        <ButtonLoading
          type="submit"
          className="w-fit rounded-full p-6"
          loading={mutationSave.isPending}
          onClick={() => mutationSave.mutate()}
        >
          Guardar Configuração
        </ButtonLoading>
      </div>
    </div>
  );
}
