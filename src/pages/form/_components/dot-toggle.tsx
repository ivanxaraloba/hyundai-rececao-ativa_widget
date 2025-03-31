import React from 'react';

import { cn } from '@/lib/utils';
import { DotProps, MapProps } from '@/types/types.config';
import { ScrollText } from 'lucide-react';
import { ControllerRenderProps } from 'react-hook-form';

import Dot from '@/components/shared/dot';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface DotToggleProps {
  dot: DotProps;
  map: MapProps;
  field: ControllerRenderProps<any, string>;
}

export default function DotToggle({ dot, map, field }: DotToggleProps) {
  const dotOptions = field.value?.[map.id]?.dots?.[dot.id]?.options || {};

  const handleOptionChange = (option: MapProps['options'][number], checked: boolean) => {
    const updatedOptions = checked
      ? { ...dotOptions, [option.value]: { ...option, estimate: false } }
      : Object.fromEntries(Object.entries(dotOptions).filter(([key]) => key !== option.value));

    field.onChange({
      ...field.value,
      [map.id]: {
        ...map,
        dots: {
          ...field.value?.[map.id]?.dots,
          [dot.id]: {
            ...dot,
            options: updatedOptions,
          },
        },
      },
    });
  };

  const handleEstimateChange = (option: MapProps['options'][number], checked: boolean) => {
    field.onChange({
      ...field.value,
      [map.id]: {
        ...map,
        dots: {
          ...field.value?.[map.id]?.dots,
          [dot.id]: {
            ...dot,
            options: {
              ...dotOptions,
              [option.value]: {
                ...dotOptions[option.value],
                estimate: checked,
              },
            },
          },
        },
      },
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          type="button"
          className="absolute origin-center"
          style={{ left: dot.x, top: dot.y, transform: 'translate(-50%, -50%)' }}
        >
          <Popover>
            <PopoverTrigger>
              <Dot className={cn(Object.keys(dotOptions).length > 0 && 'bg-red-400')} />
            </PopoverTrigger>
            {map.options?.length > 0 && (
              <PopoverContent side="right" className="flex flex-col">
                <h4 className="font-medium leading-none">{map.options_label}</h4>
                <p className="text-sm text-muted-foreground">{map.options_description}</p>
                <div className="space-y-2 mt-2">
                  {map.options.map((option) => (
                    <div key={option.value} className="grid grid-cols-4 items-center gap-2">
                      <div className="flex items-center col-span-3 gap-1">
                        <Checkbox
                          id={option.value}
                          checked={!!dotOptions[option.value]}
                          className="data-[state=checked]:bg-red-400"
                          onCheckedChange={(checked) => handleOptionChange(option, !!checked)}
                        />
                        <Label htmlFor={option.value}>{option.label}</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Label htmlFor={`estimate_${option.value}`}>
                          <ScrollText className="size-4" strokeWidth={1.5} />
                        </Label>
                        <Checkbox
                          id={`estimate_${option.value}`}
                          disabled={!dotOptions[option.value]}
                          checked={!!dotOptions[option.value]?.estimate}
                          onCheckedChange={(checked) => handleEstimateChange(option, !!checked)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            )}
          </Popover>
        </TooltipTrigger>
        <TooltipContent>{dot.label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
