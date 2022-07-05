import { FunctionComponent, useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

type ImageWithPlaceholderProps = {
  placeholderImg: string | StaticImageData;
} & ImageProps;

const ImageWithPlaceholder: FunctionComponent<ImageWithPlaceholderProps> = ({
  src,
  placeholderImg,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Image
      src={imageError || !src ? placeholderImg : src}
      onError={(): void => setImageError(true)}
      {...props}
    />
  );
};

export default ImageWithPlaceholder;
