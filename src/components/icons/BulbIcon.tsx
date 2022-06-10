import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const BrainIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <g clipPath="url(#clip0_1206_12375)">
      <path
        d="M15.125 22.627H8.875C8.53 22.627 8.25 22.347 8.25 22.002V21.377H15.75V22.002C15.75 22.347 15.47 22.627 15.125 22.627Z"
        fill="currentColor"
      />
      <path
        d="M12 2.62695C7.86437 2.62695 4.5 5.99133 4.5 10.127C4.5 12.8232 5.9275 15.2757 8.25 16.6163V20.127H15.75V16.6163C18.0725 15.2757 19.5 12.8238 19.5 10.127C19.5 5.99133 16.1356 2.62695 12 2.62695ZM13.875 12.8857L12 11.0107L10.125 12.8857L7.36625 10.127L8.25 9.2432L10.125 11.1182L12 9.2432L13.875 11.1182L15.75 9.2432L16.6337 10.127L13.875 12.8857Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1206_12375">
        <rect width="20" height="20" fill="white" transform="translate(2 2.62695)" />
      </clipPath>
    </defs>
  </Icon>
));

export default BrainIcon;
