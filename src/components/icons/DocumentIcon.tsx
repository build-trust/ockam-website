import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const DocumentIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path
      d="M21.1667 5.33333H11.6817L10.245 2.46167C10.176 2.32311 10.0697 2.20652 9.93809 2.12498C9.80651 2.04344 9.65481 2.00016 9.5 2H2.83333C2.61232 2 2.40036 2.0878 2.24408 2.24408C2.0878 2.40036 2 2.61232 2 2.83333V17C2 17.8841 2.35119 18.7319 2.97631 19.357C3.60143 19.9821 4.44928 20.3333 5.33333 20.3333H18.6667C19.5507 20.3333 20.3986 19.9821 21.0237 19.357C21.6488 18.7319 22 17.8841 22 17V6.16667C22 5.94565 21.9122 5.73369 21.7559 5.57741C21.5996 5.42113 21.3877 5.33333 21.1667 5.33333Z"
      fill="currentColor"
    />
  </Icon>
));

export default DocumentIcon;
