import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const CloudIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <g clipPath="url(#clip0_972_226)">
      <path
        d="M18.875 18.7896C20.875 18.7896 22.5 17.1646 22.5 15.1646C22.5 13.1646 20.875 11.5396 18.875 11.5396C18.625 7.91455 15.625 5.03955 12 5.03955C8.375 5.03955 5.375 7.91455 5.25 11.5396C3.625 12.0396 2.5 13.4146 2.5 15.1646C2.5 17.1646 4.125 18.7896 6.125 18.7896H18.875Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_972_226">
        <rect width="20" height="20" fill="currentColor" transform="translate(2.5 2.53955)" />
      </clipPath>
    </defs>
  </Icon>
));

export default CloudIcon;
