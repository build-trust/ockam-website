import localFont from 'next/font/local';

// eslint-disable-next-line import/prefer-default-export
export const neutraface = localFont({
  src: [
    {
      path: './NeutraText-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});
