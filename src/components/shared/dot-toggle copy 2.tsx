import React from 'react';

import { cn } from '@/lib/utils';
import { DotProps, OptionProps } from '@/types/types.config';
import { ScrollText } from 'lucide-react';

import Dot from '@/components/shared/dot';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { safelyUpdateDotOptions } from '@/utils/helpers-dot';

interface DotToggleProps {
  dot: DotProps;
  onSelect: (newDot: any, modifiedOption: any) => void;
  disabled?: boolean;
}

export default function DotToggle({ dot, onSelect, disabled }: DotToggleProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          type="button"
          className="absolute origin-center"
          style={{
            left: dot.x,
            top: dot.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Popover>
            <PopoverTrigger>
              <Dot className={cn(dot.active && 'bg-red-400', disabled && 'pointer-events-none')} />
            </PopoverTrigger>

            {dot.options && dot.options?.length > 0 && (
              <PopoverContent side="right" className="flex flex-col gap-2">
                <div className="grid">
                  <h4 className="font-medium leading-none">Danos</h4>
                  <p className="text-sm text-muted-foreground">Selecione o tipo de dano</p>
                </div>

                {dot.options?.map((option) => (
                  <div key={option.value} className="grid grid-cols-4">
                    <div className="flex items-center gap-2 col-span-3">
                      <Checkbox
                        id={option.value}
                        disabled={disabled}
                        checked={option.active ?? false}
                        className="data-[state=checked]:bg-red-400"
                        onCheckedChange={(val: boolean) =>
                          onSelect(dot, {
                            active: val,
                            estimate: false,
                          })
                        }
                      />
                      <Label htmlFor={option.value}>{option.label}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor={`estimate_${option.value}`}>
                        <ScrollText className="size-4" strokeWidth={1.5} />
                      </Label>
                      <Checkbox
                        id={`estimate_${option.value}`}
                        disabled={!option.active}
                        checked={option.estimate ?? false}
                        onCheckedChange={(val: boolean) =>
                          onSelect(dot, {
                            estimate: val,
                          })
                        }
                      />
                    </div>
                  </div>
                ))}
              </PopoverContent>
            )}
          </Popover>
        </TooltipTrigger>
        <TooltipContent>{dot.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
