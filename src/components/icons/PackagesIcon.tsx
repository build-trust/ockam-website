import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const PackagesIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path
      d="M18.75 9.57031H15V14.5703L12.5 13.3203L10 14.5703V9.57031H6.25C5.5 9.57031 5 10.0703 5 10.8203V19.5703C5 20.3203 5.5 20.8203 6.25 20.8203H18.75C19.5 20.8203 20 20.3203 20 19.5703V10.8203C20 10.0703 19.5 9.57031 18.75 9.57031Z"
      fill="white"
    />
    <path d="M22.5 3.32031H2.5V8.32031H22.5V3.32031Z" fill="currentColor" />
  </Icon>
));

export default PackagesIcon;
