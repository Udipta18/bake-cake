import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
};

export function ResponsiveImage({ src, alt, className, sizes, priority = false }: ResponsiveImageProps) {
  return <Image alt={alt} className={className} fill priority={priority} sizes={sizes} src={src} />;
}
