import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const DeveloperIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <g clipPath="url(#clip0_972_34)">
      <path
        d="M8.12488 6.63477H2.49988V19.7598C2.49988 20.1048 2.77988 20.3848 3.12488 20.3848H8.12488V6.63477Z"
        fill="currentColor"
      />
      <path
        d="M9.37488 6.63477V20.3848H21.8749C22.2199 20.3848 22.4999 20.1048 22.4999 19.7598V6.63477H9.37488ZM11.8749 9.13477H14.3749V10.3848H11.8749V9.13477ZM14.3749 17.8848H11.8749V16.6348H14.3749V17.8848ZM17.4999 15.3848H13.1249V14.1348H17.4999V15.3848ZM19.9999 12.8848H14.3749V11.6348H19.9999V12.8848Z"
        fill="currentColor"
      />
      <path
        d="M22.4999 5.38477V3.50977C22.4999 3.16477 22.2199 2.88477 21.8749 2.88477H3.12488C2.77988 2.88477 2.49988 3.16477 2.49988 3.50977V5.38477H22.4999Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_972_34">
        <rect width="20" height="20" fill="currentColor" transform="translate(2.49988 1.63477)" />
      </clipPath>
    </defs>
  </Icon>
));

export default DeveloperIcon;
