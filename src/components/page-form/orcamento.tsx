'use client';

import React, { useEffect, useState } from 'react';

import { safelyUpdateDotOptions } from '@/helpers/helpers-dot';
import { X } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

import FormSection from '@/components/form-section';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DotProps, OptionProps } from '@/utils/types';
import { FormData } from './_index';

export default function Orcamento({ form }: { form: UseFormReturn<FormData> }) {
  const dots = form.watch('dots') || {};

  const updateDotOption = (
    state: string,
    updateDot: DotProps,
    modifiedOption: OptionProps,
  ) => {
    const updatedDot = safelyUpdateDotOptions(updateDot, modifiedOption);

    const updatedDots = {
      ...dots,
      [state]: dots[state].map((d: DotProps) =>
        d.id === updateDot.id ? updatedDot : d,
      ),
    };

    form.setValue('dots', updatedDots);
  };

  return (
    <FormSection label="Orçamento">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Observação</TableHead>
            <TableHead>Área</TableHead>
            <TableHead>Área</TableHead>
            <TableHead>Orçamento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(dots).map((state) =>
            dots[state].map((dot: DotProps, dotIndex: number) =>
              dot.options
                ?.filter((option) => option.active === true)
                .map((option, optionIndex) => (
                  <TableRow key={`${dot.id}-${dotIndex}-${optionIndex}`}>
                    <TableCell>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() =>
                          updateDotOption(state, dot, {
                            ...option,
                            active: false,
                            estimate: false,
                          })
                        }
                      >
                        <X className="size-4" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Input type="text" value={state} disabled />
                    </TableCell>
                    <TableCell>
                      <Input type="text" value={dot.name} disabled />
                    </TableCell>
                    <TableCell>
                      <Input type="text" value={option.value} disabled />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        checked={option.estimate}
                        onCheckedChange={(e: boolean) =>
                          updateDotOption(state, dot, {
                            ...option,
                            estimate: e,
                          })
                        }
                      />
                    </TableCell>
                  </TableRow>
                )),
            ),
          )}
        </TableBody>
      </Table>
    </FormSection>
  );
}

