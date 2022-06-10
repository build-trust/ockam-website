import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const QuoteIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 40 33" fill="none" ref={ref} {...props}>
    <path
      d="M16.0258 12.1698C16.0258 17.9396 14.6575 22.4568 11.921 25.7214C9.14688 28.9859 5.26693 31.1306 0.281105 32.1555V26.2338C4.06734 25.0571 6.61648 22.9313 7.92854 19.8566C8.67829 18.2243 8.97819 16.649 8.82824 15.1306H-4.95911e-05V0.155518H16.0258V12.1698ZM39.4805 12.1698C39.4805 17.8637 38.1497 22.3619 35.4881 25.6644C32.789 28.9669 28.8715 31.1306 23.7357 32.1555V26.2338C27.5595 25.0191 30.1274 22.9313 31.4394 19.9705C32.1142 18.4141 32.3953 16.8008 32.2829 15.1306H23.4546V0.155518H39.4805V12.1698Z"
      fill="currentColor"
    />
  </Icon>
));

export default QuoteIcon;
