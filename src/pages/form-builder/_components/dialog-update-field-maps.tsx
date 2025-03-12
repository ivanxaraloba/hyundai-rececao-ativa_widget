import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Damage } from '@/types/types.config';
import { Ban, LucideEraser, LucideUndo, Plus, X } from 'lucide-react';

import DamageMap from '@/components/shared/damage-map';
import DotCreate from '@/components/shared/dot-create';
import { EmptyCard } from '@/components/shared/empty-card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { InputWithTags } from '@/components/ui/input-with-tags';
import { Label } from '@/components/ui/label';

export default function DialogUpdateFieldMaps({ form, field, ...props }: any) {
  const damageMaps = form.watch('maps') || [];
  const [eraser, setEraser] = useState(false);
  const [activeMap, setActiveMap] = useState<Damage | null>(damageMaps[0] || null);

  const updateMap = (field: keyof Damage, value: any) => {
    if (!activeMap) return;
    const updatedMap = { ...activeMap, [field]: value };
    const updatedMaps = damageMaps.map((map: Damage) => (map.id === activeMap.id ? updatedMap : map));
    form.setValue('maps', updatedMaps, {
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
            id: '',
            name: '',
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
    form.setValue('maps', updatedMaps, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setActiveMap(newMap);
  };

  const deleteMap = (id: string) => {
    const updatedMaps = damageMaps.filter((map: Damage) => map.id !== id);
    form.setValue('maps', updatedMaps, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setActiveMap(updatedMaps[0] || null);
  };
  return (
    <Dialog {...props}>
      <DialogContent className="!max-w-lg max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Mapas</DialogTitle>
        </DialogHeader>
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
          <div className="space-y-4">
            <div>
              <Label>Nome Mapa</Label>
              <Input value={activeMap.label} onChange={(e) => updateMap('label', e.target.value)} />
            </div>
            <div>
              <Label>Imagem Mapa</Label>
              <Input value={activeMap.image} onChange={(e) => updateMap('image', e.target.value)} />
            </div>
            <div>
              <Label>Opções</Label>
              <InputWithTags
                value={activeMap.options || []}
                onValueChange={(tags) => updateMap('options', tags)}
                placeholder="Adicionar nova opção ( max: 5 )"
                limit={5}
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
                  <Button size="icon" variant={eraser ? 'destructive' : 'outline'} onClick={() => setEraser(!eraser)}>
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
      </DialogContent>
    </Dialog>
  );
}
