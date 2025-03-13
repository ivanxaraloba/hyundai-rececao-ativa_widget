import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { FieldRowProps, MapProps, mapSchema } from '@/types/types.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogProps } from '@radix-ui/react-dialog';
import { Ban, LucideEraser, LucideUndo, Plus, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

import DamageMap from '@/components/shared/damage-map';
import DotCreate from '@/components/shared/dot-create';
import { EmptyCard } from '@/components/shared/empty-card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputWithTags } from '@/components/ui/input-with-tags';
import { Label } from '@/components/ui/label';

interface UpdateFieldMapsProps {
  field: FieldRowProps | null;
  onSuccess: (updatedField: FieldRowProps) => void;
}

export default function DialogUpdateFieldMaps({
  field,
  onSuccess,
  ...props
}: UpdateFieldMapsProps & DialogProps) {
  if (!field) return 'error ( missing field )';

  const [eraser, setEraser] = useState(false);
  const [maps, setMaps] = useState<MapProps[]>(
    field?.maps || [
      {
        id: Date.now().toString(),
        label: 'Map 1',
        image: '',
        dots: [],
        options: [],
      },
    ],
  );

  const formMap = useForm<MapProps>({
    mode: 'onSubmit',
    resolver: zodResolver(mapSchema),
    defaultValues: {
      id: maps[0]?.id || '',
      label: maps[0]?.label || '',
      image: maps[0]?.image || '',
      dots: maps[0]?.dots || [],
      options: maps[0]?.options || [],
    },
  });

  const onDotClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!formMap.getValues('id')) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dots = eraser
      ? formMap.getValues('dots')?.filter((dot) => Math.hypot(dot.x - x, dot.y - y) > 15) || []
      : [
          ...(formMap.getValues('dots') || []),
          {
            id: Date.now(),
            name: `Dot ${Date.now()}`,
            x,
            y,
            active: false,
            options: [],
          },
        ];

    formMap.setValue('dots', dots, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const createMap = () => {
    const newMap: MapProps = {
      id: Date.now().toString(),
      label: `Map ${maps.length + 1}`,
      image: '',
      dots: [],
      options: [],
    };
    setMaps([...maps, newMap]);
    formMap.reset(newMap);
  };

  const deleteMap = (id: MapProps['id']) => {
    setMaps(maps.filter((map) => map.id !== id));
    formMap.reset(maps[0]);
  };

  const onSubmit = (data: MapProps) => {
    const updatedMaps = maps.map((map) => (map.id === data.id ? data : map));
    setMaps(updatedMaps);

    onSuccess({
      ...field,
      maps: updatedMaps,
    });
    props.onOpenChange?.(false);
  };

  return (
    <Dialog {...props}>
      <DialogContent className="!max-w-lg max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Mapas</DialogTitle>
        </DialogHeader>
        <div className="flex items-center flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={createMap}>
            <Plus />
          </Button>
          {maps?.map((map: MapProps) => (
            <Button
              key={map.id}
              size="sm"
              onClick={() => formMap.reset(map)}
              variant={formMap.watch('id') === map.id ? 'default' : 'outline'}
              className="gap-4"
            >
              {map.label}
              <div
                className="p-1 hover:text-destructive hover:bg-destructive/30 rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteMap(map.id);
                }}
              >
                <X />
              </div>
            </Button>
          ))}
        </div>
        {formMap.watch('id') && (
          <Form {...formMap}>
            <form onSubmit={formMap.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={formMap.control}
                name="label"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Map Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formMap.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Map Image</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formMap.control}
                name="options"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Map Options</FormLabel>
                    <FormControl>
                      <InputWithTags
                        value={field.value || []}
                        onValueChange={field.onChange}
                        placeholder="Adicionar nova opção ( max: 5 )"
                        limit={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formMap.control}
                name="dots"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Map Dots</FormLabel>
                    <FormControl>
                      {formMap.watch('image') ? (
                        <div className="flex gap-2">
                          <DamageMap
                            image={formMap.watch('image')}
                            onMapClick={onDotClick}
                            className={cn(eraser ? 'cursor-not-allowed' : 'cursor-crosshair')}
                          >
                            {formMap
                              .watch('dots')
                              ?.map((dot, index) => (
                                <DotCreate
                                  key={index}
                                  dot={dot}
                                  disabled={eraser}
                                  onSelect={(newDot) =>
                                    formMap.setValue(
                                      'dots',
                                      formMap
                                        .watch('dots')
                                        ?.map((d, i) => (i === index ? newDot : d)) || [],
                                    )
                                  }
                                />
                              ))}
                          </DamageMap>
                          <div className="flex flex-col gap-2 h-fit">
                            <Button size="icon" variant="outline" onClick={() => null}>
                              <LucideUndo />
                            </Button>
                            <Button
                              size="icon"
                              variant={eraser ? 'destructive' : 'outline'}
                              onClick={() => setEraser(!eraser)}
                            >
                              <LucideEraser />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <EmptyCard
                          className="mt-2"
                          title="Adicione uma imagem"
                          description="Adicione uma imagem para conseguir adicionar pontos"
                          icon={Ban}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Save Map</Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
