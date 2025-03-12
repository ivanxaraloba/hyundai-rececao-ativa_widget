import { DotProps, OptionProps } from '@/types/types.config';

export const safelyUpdateDotOptions = (
  dot: DotProps,
  modifiedOption: OptionProps,
): DotProps => {
  const updatedOptions = dot.options?.map((option) =>
    option.value === modifiedOption.value
      ? { ...option, ...modifiedOption }
      : option,
  );

  return {
    ...dot,
    options: updatedOptions,
    active: !!updatedOptions?.some((option) => option.active),
  };
};
