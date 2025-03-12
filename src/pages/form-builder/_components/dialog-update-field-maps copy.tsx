import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Damage } from '@/types/types.config';
import { Ban, LucideEraser, LucideUndo, Plus, X } from 'lucide-react';
import { Form, useForm } from 'react-hook-form';

import DamageMap from '@/components/shared/damage-map';
import DotCreate from '@/components/shared/dot-create';
import { EmptyCard } from '@/components/shared/empty-card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputWithTags } from '@/components/ui/input-with-tags';
import { Label } from '@/components/ui/label';

export default function DialogUpdateFieldMaps({ form, field, ...props }: any) {
  const [eraser, setEraser] = useState(false);
  const damageMaps = form.watch('maps') || [];
  const [activeMap, setActiveMap] = useState<Damage | null>(damageMaps[0] || null);

  const formMap = useForm({
    defaultValues: {
      maps: damageMaps,
    },
  });

  const updateMap = (field: keyof Damage, value: any) => {
    if (!activeMap) return;
    const updatedMap = { ...activeMap, [field]: value };
    const updatedMaps = damageMaps.map((map: Damage) => (map.id === activeMap.id ? updatedMap : map));
    formMap.setValue('maps', updatedMaps, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setActiveMap(updatedMap);
  };

  const handleDotClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!activeMap) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dots = eraser
      ? activeMap.dots?.filter((dot) => Math.hypot(dot.x - x, dot.y - y) > 15) || []
      : [
          ...(activeMap.dots || []),
          {
            id: Date.now(),
            name: `Dot ${Date.now()}`,
            x,
            y,
            active: false,
            options: [],
          },
        ];

    updateMap('dots', dots);
  };

  const createMap = () => {
    const newMap: Damage = {
      id: Date.now().toString(),
      label: `Map ${damageMaps.length + 1}`,
      image: '',
      dots: [],
      options: [],
    };
    const updatedMaps = [...damageMaps, newMap];
    formMap.setValue('maps', updatedMaps, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setActiveMap(newMap);
  };

  const deleteMap = (id: string) => {
    const updatedMaps = damageMaps.filter((map: Damage) => map.id !== id);
    formMap.setValue('maps', updatedMaps, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setActiveMap(updatedMaps[0] || null);
  };

  const onSubmit = () => {
    form.setValue('maps', formMap.getValues('maps'), {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    props.onOpenChange!(false);
  };

  return (
    <Dialog {...props}>
      <DialogContent className="!max-w-lg max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Mapas</DialogTitle>
        </DialogHeader>

        <Form {...formMap}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={createMap}>
                <Plus />
              </Button>
              <div className="flex flex-wrap gap-2">
                {damageMaps.map((map: Damage) => (
                  <Button
                    key={map.id}
                    size="sm"
                    onClick={() => setActiveMap(map)}
                    variant={activeMap?.id === map.id ? 'default' : 'outline'}
                  >
                    {map.label}
                    <div
                      className="p-1 hover:text-destructive"
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
            </div>

            {activeMap && (
              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="space-y-4 h-fit">
                  <FormField
                    control={formMap.control}
                    name={`maps.${damageMaps.findIndex((map: Damage) => map.id === activeMap?.id)}.label`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Mapa</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formMap.control}
                    name={`maps.${damageMaps.findIndex((map: Damage) => map.id === activeMap?.id)}.image`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Imagem Mapa</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formMap.control}
                    name={`maps.${damageMaps.findIndex((map: Damage) => map.id === activeMap?.id)}.options`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Opções</FormLabel>
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
                </div>
                {activeMap.image ? (
                  <div className="flex gap-2">
                    <DamageMap
                      image={activeMap.image}
                      onMapClick={handleDotClick}
                      className={cn(eraser ? 'cursor-not-allowed' : 'cursor-crosshair')}
                    >
                      {activeMap.dots?.map((dot, index) => (
                        <DotCreate
                          key={index}
                          dot={dot}
                          disabled={eraser}
                          onSelect={(newDot) =>
                            updateMap('dots', activeMap.dots?.map((d, i) => (i === index ? newDot : d)) || [])
                          }
                        />
                      ))}
                    </DamageMap>
                    <div className="flex flex-col gap-2 h-fit">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                          if (!activeMap.dots?.length) return;
                          const newDots = [...activeMap.dots];
                          newDots.pop();
                          updateMap('dots', newDots);
                        }}
                      >
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
              </div>
            )}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
