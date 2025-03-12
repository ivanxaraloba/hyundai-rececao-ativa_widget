import React, { useState } from 'react';

import { Config, Damage } from '@/types/types.config';
import { LucideEraser, LucideUndo, Plus, X } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

import DamageMap from '@/components/shared/damage-map';
import DotCreate from '@/components/shared/dot-create';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputWithTags } from '@/components/ui/input-with-tags';
import { Label } from '@/components/ui/label';
import { H3 } from '@/components/ui/typography';

export default function TabDamageMaps({
  form,
}: {
  form: UseFormReturn<Config>;
}) {
  const [eraser, setEraser] = useState(false);
  const damageMaps = form.watch('damage_maps') || [];
  const [activeMap, setActiveMap] = useState<Damage | null>(
    damageMaps[0] || null,
  );

  const updateMap = (field: keyof Damage, value: any) => {
    if (!activeMap) return;
    const updatedMap = { ...activeMap, [field]: value };
    const updatedMaps = damageMaps.map((map) =>
      map.id === activeMap.id ? updatedMap : map,
    );
    form.setValue('damage_maps', updatedMaps, {
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
      ? activeMap.dots?.filter(
          (dot) => Math.hypot(dot.x - x, dot.y - y) > 15,
        ) || []
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
    form.setValue('damage_maps', updatedMaps, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setActiveMap(newMap);
  };

  const deleteMap = (id: string) => {
    const updatedMaps = damageMaps.filter((map) => map.id !== id);
    form.setValue('damage_maps', updatedMaps, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setActiveMap(updatedMaps[0] || null);
  };

  return (
    <>
      <H3>Mapas de Dano</H3>
      <div className="flex items-center gap-2 mt-4">
        <Button size="sm" variant="outline" onClick={createMap}>
          <Plus />
        </Button>
        {damageMaps.map((map) => (
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

      {activeMap && (
        <div className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label>Nome Mapa</Label>
            <Input
              value={activeMap.label}
              onChange={(e) => updateMap('label', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Imagem Mapa</Label>
            <Input
              value={activeMap.image}
              onChange={(e) => updateMap('image', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Opções</Label>
            <InputWithTags
              value={activeMap.options || []}
              onValueChange={(tags) => updateMap('options', tags)}
              placeholder="Adicionar nova opção ( max: 5 )"
              limit={5}
            />
          </div>
          {activeMap.image && (
            <div className="flex gap-2">
              <DamageMap image={activeMap.image} onMapClick={handleDotClick}>
                {activeMap.dots?.map((dot) => (
                  <DotCreate
                    key={dot.id}
                    dot={dot}
                    disabled={eraser}
                    onSelect={(newDot) =>
                      updateMap(
                        'dots',
                        activeMap.dots?.map((d) =>
                          d.id === dot.id ? newDot : d,
                        ) || [],
                      )
                    }
                  />
                ))}
              </DamageMap>
              <div className="flex flex-col gap-2 top-5 sticky h-fit">
                <Button
                  size="icon"
                  variant={eraser ? 'destructive' : 'outline'}
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
          )}
        </div>
      )}
    </>
  );
}
