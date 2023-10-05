import { StaticImageData } from 'next/legacy/image';

const getRandomImage = (images: StaticImageData[]): StaticImageData =>
  images[Math.floor(Math.random() * images.length)];

export default getRandomImage;
