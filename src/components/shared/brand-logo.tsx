import React from 'react';

export default function BrandLogo({
  src,
  className,
  ...props
}: {
  src: string;
  className?: string;
}) {
  return (
    <img
      alt="brand_logo"
      loading="lazy"
      className="mx-auto max-h-28 max-w-56 sm:max-w-96 sm:max-h-36"
      src={src}
      {...props}
    />
  );
}
