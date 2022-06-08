import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const IntegrityIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path
      d="M0.75 23.2499L3.7875 20.2109"
      stroke="#0A1A2B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.7485 11.25L7.5 13.5"
      stroke="#0A1A2B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 14.25L10.5 16.5"
      stroke="#0A1A2B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.78728 12.7875C2.80266 13.7721 2.24951 15.1075 2.24951 16.5C2.24951 17.8925 2.80266 19.2279 3.78728 20.2125C4.7719 21.1971 6.10732 21.7503 7.49978 21.7503C8.89224 21.7503 10.2277 21.1971 11.2123 20.2125L12.7123 18.7125L5.24978 11.25L3.78728 12.7875Z"
      stroke="#0A1A2B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.25 0.75L20.2125 3.789"
      stroke="#4FDAB8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.2126 11.2123C21.1972 10.2277 21.7504 8.89224 21.7504 7.49978C21.7504 6.10732 21.1972 4.7719 20.2126 3.78728C19.228 2.80266 17.8926 2.24951 16.5001 2.24951C15.1076 2.24951 13.7722 2.80266 12.7876 3.78728L11.2876 5.28728L18.7501 12.7498L20.2126 11.2123Z"
      stroke="#4FDAB8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
));

export default IntegrityIcon;
