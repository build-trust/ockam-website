import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const TwitterIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path
      d="M24 4.5C23.1 4.95 22.2 5.1 21.15 5.25C22.2 4.65 22.95 3.75 23.25 2.55C22.35 3.15 21.3 3.45 20.1 3.75C19.2 2.85 17.85 2.25 16.5 2.25C13.95 2.25 11.7 4.5 11.7 7.2C11.7 7.65 11.7 7.95 11.85 8.25C7.8 8.1 4.05 6.15 1.65 3.15C1.2 3.9 1.05 4.65 1.05 5.7C1.05 7.35 1.95 8.85 3.3 9.75C2.55 9.75 1.8 9.45 1.05 9.15C1.05 11.55 2.7 13.5 4.95 13.95C4.5 14.1 4.05 14.1 3.6 14.1C3.3 14.1 3 14.1 2.7 13.95C3.3 15.9 5.1 17.4 7.35 17.4C5.7 18.75 3.6 19.5 1.2 19.5C0.75 19.5 0.45 19.5 0 19.5C2.25 20.85 4.8 21.75 7.5 21.75C16.5 21.75 21.45 14.25 21.45 7.8C21.45 7.65 21.45 7.35 21.45 7.2C22.5 6.45 23.4 5.55 24 4.5Z"
      fill="currentColor"
    />
  </Icon>
));

export default TwitterIcon;
