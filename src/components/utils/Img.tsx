import Image, { ImageProps, StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface PropsType extends Omit<ImageProps, "alt"> {
  src: string | StaticImageData;
  alt?: string;
  style?: CSSProperties;
}

export default function Img(props: PropsType) {
  const { src, alt, style = {}, ...rest } = props;

  return (
    <Image
      src={src}
      alt={alt || ""}
      fill
      sizes="100vw"
      style={{ objectFit: "cover", ...style }}
      {...rest}
    />
  );
}
