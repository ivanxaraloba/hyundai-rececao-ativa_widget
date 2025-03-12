'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from './badge';

interface Tag {
  text: string;
  onRemove: () => void;
}

const Tag = ({ text, onRemove }: Tag) => {
  return (
    <Badge
      variant="outline"
      className="cursor-pointer gap-1"
      onClick={onRemove}
    >
      {text}
      <X className="size-3" />
    </Badge>
  );
};

interface InputWithTagsProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string[];
  onValueChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
  limit?: number;
}

const InputWithTags = React.forwardRef<HTMLInputElement, InputWithTagsProps>(
  (
    {
      value: items,
      onValueChange: onTagsChange,
      placeholder,
      className,
      limit = 10,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        e.preventDefault();
        if (!limit || items.length < limit) {
          onTagsChange([...items, inputValue.trim()]);
          setInputValue('');
        }
      }
    };

    const removeTag = (indexToRemove: number) => {
      onTagsChange(items.filter((_, index) => index !== indexToRemove));
    };

    return (
      <div className={cn('flex flex-col gap-2 w-full', className)}>
        <input
          ref={ref}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || 'Type something and press Enter...'}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
            'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
            'disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          )}
          disabled={limit ? items.length >= limit : false}
          {...props}
        />
        {!!items.length && (
          <div className="flex flex-wrap gap-2">
            {items.map((tag, index) => (
              <Tag key={index} text={tag} onRemove={() => removeTag(index)} />
            ))}
          </div>
        )}
      </div>
    );
  },
);

InputWithTags.displayName = 'InputWithTags';

export { InputWithTags };
