import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const PrivacyIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path
      d="M8.25 7.65V4.5C8.25 2.4285 9.9285 0.75 12 0.75C14.0715 0.75 15.75 2.4285 15.75 4.5V7.65"
      stroke="#0A1A2B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17.25C13.2426 17.25 14.25 16.2426 14.25 15C14.25 13.7574 13.2426 12.75 12 12.75C10.7574 12.75 9.75 13.7574 9.75 15C9.75 16.2426 10.7574 17.25 12 17.25Z"
      stroke="#4FDAB8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 23.25C16.5563 23.25 20.25 19.5563 20.25 15C20.25 10.4437 16.5563 6.75 12 6.75C7.44365 6.75 3.75 10.4437 3.75 15C3.75 19.5563 7.44365 23.25 12 23.25Z"
      stroke="#0A1A2B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
));

export default PrivacyIcon;
