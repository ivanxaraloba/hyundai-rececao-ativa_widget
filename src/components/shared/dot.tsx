import React from 'react';

import { safelyUpdateDotOptions } from '@/helpers/helpers-dot';
import { cn } from '@/lib/utils';
import { ScrollText } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { DotProps, OptionProps } from '@/utils/types';

interface DotComponentProps {
  dot: DotProps;
  onSelect: (newDot: DotProps) => void;
  disabled?: boolean;
}

const Dot: React.FC<DotComponentProps> = ({ dot, onSelect, disabled }) => {
  const updateDotOption = (modifiedOption: OptionProps) => {
    onSelect(safelyUpdateDotOptions(dot, modifiedOption));
  };

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
            <PopoverTrigger asChild>
              <input
                type="text"
                readOnly
                className={cn(
                  'rounded-full truncate focus:z-10 transition-transform size-6 text-xs text-center text-primary-foreground',
                  dot.active ? 'bg-red-400' : 'bg-gray-600',
                  disabled && 'pointer-events-none',
                  'outline-none ring-0 cursor-pointer',
                )}
                value=""
              />
            </PopoverTrigger>

            {dot.options && dot.options?.length > 0 && (
              <PopoverContent side="right" className="flex flex-col gap-2">
                <div className="grid gap-4">
                  <h4 className="font-medium leading-none">Danos</h4>
                  <p className="text-sm text-muted-foreground">
                    Selecione o tipo de dano
                  </p>
                </div>

                {dot.options?.map((option) => (
                  <div key={option.value} className="grid grid-cols-4">
                    <div className="flex items-center gap-2 col-span-3">
                      <Checkbox
                        id={option.value}
                        disabled={disabled}
                        checked={option.active ?? false}
                        className="data-[state=checked]:bg-red-400"
                        onCheckedChange={(e: boolean) =>
                          updateDotOption({
                            ...option,
                            active: e,
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
                        className="data-[state=checked]:bg-green-400"
                        onCheckedChange={(e: boolean) =>
                          updateDotOption({
                            ...option,
                            estimate: e,
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
};

export default Dot;

