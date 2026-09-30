import Image, { type ImageProps } from "next/image";

type BrandImageProps = ImageProps & {
  placeholderAsset?: boolean;
};

export function BrandImage({
  placeholderAsset = true,
  className = "",
  alt,
  ...props
}: BrandImageProps) {
  return (
    <Image
      alt={alt}
      className={`brand-image ${className}`.trim()}
      data-placeholder={placeholderAsset ? "true" : undefined}
      {...props}
    />
  );
}
