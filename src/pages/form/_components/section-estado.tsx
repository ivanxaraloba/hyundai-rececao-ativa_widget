import Dot from '@/pages/form/_components/dot';
import { DotProps, VehicleState } from '@/types/types.config';
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

  const updateDots = (newDot: DotProps, vehicleState: VehicleState) => {
    const currentDots = form.getValues('grouped_dots');
    const updatedDamage = currentDots[vehicleState.tab_id]?.dots || [];

    const updatedDotsForDamage = updatedDamage.map((dot: DotProps) => {
      return dot.id === newDot.id ? newDot : dot;
    });

    form.setValue('grouped_dots', {
      ...currentDots,
      [vehicleState.tab_id]: {
        ...currentDots[vehicleState.tab_id],
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
              <Tabs defaultValue={configVehicleState?.[0]?.tab_id}>
                <TabsList>
                  {configVehicleState?.map((vehicleState) => (
                    <TabsTrigger
                      key={vehicleState.tab_id}
                      value={vehicleState.tab_id}
                    >
                      {vehicleState.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="border rounded-lg flex justify-center mt-2">
                  {configVehicleState?.map((vehicleState) => (
                    <TabsContent
                      key={vehicleState.tab_id}
                      value={vehicleState.tab_id}
                    >
                      <div className="relative flex items-center justify-center min-w-[380px] w-[380px]">
                        {/* image */}
                        <img
                          className="min-w-[380px] w-[380px] select-none pointer-events-none"
                          src={vehicleState.map.image}
                          alt={vehicleState.map.id_map}
                        />
                        {/* dots */}
                        {field.value?.[vehicleState.tab_id].dots?.map(
                          (dot: DotProps) => (
                            <Dot
                              key={dot.id}
                              dot={dot}
                              onSelect={(newDot) =>
                                updateDots(newDot, vehicleState)
                              }
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

