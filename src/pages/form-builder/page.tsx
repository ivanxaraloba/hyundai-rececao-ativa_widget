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
import { BookText, ChevronDown, ChevronUp, Edit2, Eye, EyeOff, ImageIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import BrandLogo from '@/components/shared/brand-logo';
import { Button } from '@/components/ui/button';
import ButtonLoading from '@/components/ui/button-loading';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { H2, H3, H4, Muted } from '@/components/ui/typography';
import { useGlobalStore } from '@/stores/global';
import { useRouterStore } from '@/stores/router';
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
  const { config, setConfig, fields, sections, mutationSave } = useFormBuilder();
  const router = useRouterStore();
  const [rowAction, setRowAction] = useState<RowActionProps | null>(null);
  const [viewImage, setViewImage] = useState(false);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    ...config?.sections.reduce(
      (acc, section) => ({
        ...acc,
        [section.id]: true,
      }),
      {},
    ),
  });
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
    <>
      <Button
        type="button"
        size="icon"
        variant="secondary"
        className="fixed top-4 right-4 sm:top-10 sm:right-10 border"
        onClick={() => router.push('form')}
      >
        <BookText />
      </Button>

      <div className="space-y-10 pb-16">
        <H3>Configurador</H3>
        <Muted>Configure o formulário e os mapas de dano</Muted>

        {viewImage && config?.logo && <BrandLogo src={config?.logo} />}

        <Reorder.Group
          axis="y"
          values={config?.sections || []}
          onReorder={sections.reorder}
          className="space-y-4"
        >
          <div className="w-full flex justify-end">
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
          <div className="border bg-secondary p-2 flex items-center rounded-xl group focus-within:ring-1 focus-within:ring-ring">
            <label htmlFor="vehicle2" className="w-9 grid place-items-center">
              <ImageIcon className="size-4" />
            </label>
            <Input
              id="vehicle2"
              value={config?.logo || ''}
              onChange={(e) =>
                setConfig((prev) => ({
                  ...prev,
                  logo: e.target.value,
                  sections: prev?.sections || [],
                }))
              }
              className="!border-none !outline-none !ring-0 !shadow-none"
              placeholder="Brand Logo ( www.example.com/logo.png )"
            />

            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={() => setViewImage(!viewImage)}
            >
              {viewImage ? <EyeOff /> : <Eye />}
            </Button>
          </div>

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
        </Reorder.Group>

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

        <div className="fixed w-full left-0 bottom-5 flex justify-center">
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
    </>
  );
}
