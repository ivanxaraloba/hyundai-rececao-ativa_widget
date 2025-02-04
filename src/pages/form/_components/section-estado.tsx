import Dot from '@/pages/form/_components/dot';
import { Damage, DotProps } from '@/types/types.config';
import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

import FormSection from '@/components/shared/form-section';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGlobalStore } from '@/stores/global';
import { FormData } from '../page';

export default function SectionEstado({
  form,
}: {
  form: UseFormReturn<FormData>;
}) {
  const { config } = useGlobalStore();
  const configVehicleState = config?.estado_viatura;

  const updateDots = (newDot: DotProps, damage: Damage) => {
    const currentDots = form.getValues('grouped_dots');
    const updatedDamage = currentDots[damage.id]?.dots || [];

    const updatedDotsForDamage = updatedDamage.map((dot: DotProps) => {
      return dot.id === newDot.id ? newDot : dot;
    });

    form.setValue('grouped_dots', {
      ...currentDots,
      [damage.id]: {
        ...currentDots[damage.id],
        dots: updatedDotsForDamage,
      },
    });
  };

  return (
    <FormSection label="Estado da Viatura">
      <FormField
        control={form.control}
        name="grouped_dots"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Tabs defaultValue={configVehicleState?.[0]?.id}>
                <TabsList>
                  {configVehicleState?.map((damage) => (
                    <TabsTrigger key={damage.id} value={damage.id}>
                      {damage.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="border rounded-lg flex justify-center mt-2">
                  {configVehicleState?.map((damage) => (
                    <TabsContent key={damage.id} value={damage.id}>
                      <div className="relative flex items-center justify-center min-w-[380px] w-[380px]">
                        {/* image */}
                        <img
                          className="min-w-[380px] w-[380px] select-none pointer-events-none"
                          src={damage.image}
                          alt={damage.id}
                        />
                        {/* dots */}
                        {(field.value?.[damage.id]?.dots || []).map(
                          (dot: DotProps) => (
                            <Dot
                              key={dot.id}
                              dot={dot}
                              onSelect={(newDot) => updateDots(newDot, damage)}
                            />
                          ),
                        )}
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormSection>
  );
}

