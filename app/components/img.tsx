import Image, { ImageProps } from "next/image";

interface ImgProps extends ImageProps {
  src: string;
  alt: string;
}

function Img({ src, alt, ...props }: ImgProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={165}
      height={0}
      style={{ height: "auto", width: props.width + "px" || "100%" }}
      {...props}
    />
  );
}

export default Img;
