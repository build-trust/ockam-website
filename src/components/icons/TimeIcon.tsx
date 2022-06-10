import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const BrainIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <g clipPath="url(#clip0_1206_12387)">
      <path
        d="M12 3.62695C7.05 3.62695 3 7.67695 3 12.627C3 17.577 7.05 21.627 12 21.627C16.95 21.627 21 17.577 21 12.627C21 7.67695 16.95 3.62695 12 3.62695ZM16.5 13.752H10.875V8.12695H13.125V11.502H16.5V13.752Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1206_12387">
        <rect width="18" height="18" fill="currentColor" transform="translate(3 3.62695)" />
      </clipPath>
    </defs>
  </Icon>
));

export default BrainIcon;
