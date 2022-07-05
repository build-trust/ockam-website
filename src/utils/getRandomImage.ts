import { StaticImageData } from 'next/image';

const getRandomImage = (images: StaticImageData[]): StaticImageData =>
  images[Math.floor(Math.random() * images.length)];

export default getRandomImage;
