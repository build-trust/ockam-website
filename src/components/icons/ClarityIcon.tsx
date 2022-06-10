import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const BrainIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path
      d="M12 5.12695C7 5.12695 2.73 8.23695 1 12.627C2.73 17.017 7 20.127 12 20.127C17 20.127 21.27 17.017 23 12.627C21.27 8.23695 17 5.12695 12 5.12695ZM12 17.627C9.24 17.627 7 15.387 7 12.627C7 9.86695 9.24 7.62695 12 7.62695C14.76 7.62695 17 9.86695 17 12.627C17 15.387 14.76 17.627 12 17.627ZM12 9.62695C10.34 9.62695 9 10.967 9 12.627C9 14.287 10.34 15.627 12 15.627C13.66 15.627 15 14.287 15 12.627C15 10.967 13.66 9.62695 12 9.62695Z"
      fill="currentColor"
    />
  </Icon>
));

export default BrainIcon;
