import { FC } from 'react';

type Props = {
  src: string;
  track: string;
};
const Video: FC<Props> = ({ src, track }) => (
  <video controls>
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
    <track label="English" kind="captions" src={track} />
  </video>
);
export default Video;
