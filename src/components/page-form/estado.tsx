import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

import Dot from '@/components/dot';
import FormSection from '@/components/form-section';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DAMAGE_MAPS } from '@/utils/constants';
import { DotProps } from '@/utils/types';
import { FormData } from './_index';

const Estado: React.FC<{
  form: UseFormReturn<FormData>;
}> = ({ form }) => {
  const handle = (newDot: DotProps, damageMapId: string) => {
    const currentDots = form.getValues('dots');
    const updatedDamage = currentDots[damageMapId] || [];

    const updatedDotsForDamage = updatedDamage.map((dot: DotProps) => {
      return dot.id === newDot.id ? newDot : dot;
    });

    form.setValue('dots', {
      ...currentDots,
      [damageMapId]: updatedDotsForDamage,
    });
  };
  return (
    <FormSection label="Estado da Viatura">
      <FormField
        control={form.control}
        name="dots"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Tabs defaultValue={DAMAGE_MAPS[0]?.id}>
                <TabsList>
                  {DAMAGE_MAPS.map((damageMap) => (
                    <TabsTrigger key={damageMap.id} value={damageMap.id}>
                      {damageMap.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="border rounded-lg flex justify-center mt-2">
                  {DAMAGE_MAPS.map((damageMap) => (
                    <TabsContent key={damageMap.id} value={damageMap.id}>
                      <div className="relative flex items-center justify-center min-w-[380px] w-[380px]">
                        {/* image */}
                        <img
                          className="min-w-[380px] w-[380px] select-none pointer-events-none"
                          src={damageMap.config.image}
                          alt={damageMap.label}
                        />
                        {/* dots */}
                        {field.value?.[damageMap.id]?.map((dot: DotProps) => (
                          <Dot
                            key={dot.id}
                            dot={dot}
                            onSelect={(newDot) => handle(newDot, damageMap.id)}
                          />
                        ))}
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
};

export default Estado;

