import React from 'react';

import DotToggle from '@/pages/form/_components/dot-toggle';
import { DotProps, FieldRowProps, OptionProps } from '@/types/types.config';
import { X } from 'lucide-react';
import { ControllerRenderProps } from 'react-hook-form';

import DamageMap from '@/components/shared/damage-map';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FieldVariantMapsProps {
  configField: FieldRowProps;
  field: ControllerRenderProps;
}

export default function FieldVariantMaps({ configField, field }: FieldVariantMapsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Tabs defaultValue={configField.maps?.[0].id ? String(configField.maps[0].id) : undefined}>
        <TabsList>
          {configField.maps?.map((map) => (
            <TabsTrigger key={map.id} value={map.id}>
              {map.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="border rounded-lg flex justify-center mt-2">
          {configField.maps?.map((map, mapIndex) => (
            <TabsContent key={mapIndex} value={map.id}>
              <DamageMap image={map.image}>
                {map.dots.map((dot: DotProps, dotIndex: number) => {
                  return <DotToggle key={dotIndex} dot={dot} map={map} field={field} />;
                })}
              </DamageMap>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Observação</TableHead>
            <TableHead>Área</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Orçamento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(field.value || {}).length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center h-24">
                No data available
              </TableCell>
            </TableRow>
          ) : (
            Object.keys(field.value).map((mapId) =>
              Object.keys(field.value[mapId]?.dots || {}).map((dotId) =>
                (
                  Object.values(field.value[mapId]?.dots?.[dotId]?.options || {}) as OptionProps[]
                ).map((option, optionIndex) => {
                  return (
                    <TableRow key={`${mapId}-${dotId}-${optionIndex}`}>
                      <TableCell>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            field.onChange({
                              ...field.value,
                              [mapId]: {
                                ...field.value[mapId],
                                dots: {
                                  ...field.value[mapId]?.dots,
                                  [dotId]: {
                                    ...field.value[mapId]?.dots?.[dotId],
                                  },
                                },
                              },
                            });
                          }}
                        >
                          <X />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Input type="text" value={field.value?.[mapId]?.label} disabled />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="text"
                          value={field.value?.[mapId]?.dots?.[dotId]?.label}
                          disabled
                        />
                      </TableCell>
                      <TableCell>
                        <Input type="text" value={option.label} disabled />
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          checked={!!option.estimate}
                          onCheckedChange={(checked) => {
                            field.onChange({
                              ...field.value,
                              [mapId]: {
                                ...field.value[mapId],
                                dots: {
                                  ...field.value[mapId]?.dots,
                                  [dotId]: {
                                    ...field.value[mapId]?.dots?.[dotId],
                                    options: {
                                      ...field.value[mapId]?.dots?.[dotId]?.options,
                                      [option.value]: {
                                        ...field.value[mapId]?.dots?.[dotId]?.options[option.value],
                                        estimate: checked,
                                      },
                                    },
                                  },
                                },
                              },
                            });
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                }),
              ),
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}
