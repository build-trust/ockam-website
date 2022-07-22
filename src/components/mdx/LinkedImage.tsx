import { ImageProps } from '@chakra-ui/react';

import Image from './Image';

const LinkedImage = ({ src, ...rest }: ImageProps): JSX.Element => (
  <a href={src} rel="noopener noreferrer" target="_blank">
    <Image src={src} mb={6} {...rest} />
  </a>
);

export default LinkedImage;
