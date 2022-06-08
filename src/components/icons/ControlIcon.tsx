import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const ControlIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path d="M5 23V19" stroke="#0A1A2B" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 7V1" stroke="#0A1A2B" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M5 19C7.20914 19 9 17.2091 9 15C9 12.7909 7.20914 11 5 11C2.79086 11 1 12.7909 1 15C1 17.2091 2.79086 19 5 19Z"
      stroke="#4FDAB8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19 1V5" stroke="#0A1A2B" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 17V23" stroke="#0A1A2B" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M19 13C21.2091 13 23 11.2091 23 9C23 6.79086 21.2091 5 19 5C16.7909 5 15 6.79086 15 9C15 11.2091 16.7909 13 19 13Z"
      stroke="#4FDAB8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
));

export default ControlIcon;
