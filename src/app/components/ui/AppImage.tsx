import Image, { type ImageProps } from "next/image";

type AppImageProps = Omit<ImageProps, "src" | "alt"> & {
  src?: string;
  alt?: string;
};

export default function AppImage({
  src = "/assets/images/no_image.png",
  alt = "TerangaTech image",
  ...props
}: AppImageProps) {
  return <Image src={src} alt={alt} {...props} />;
}
