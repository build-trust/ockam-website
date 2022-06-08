import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const CheckIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <g clipPath="url(#clip0_273_7958)">
      <path
        d="M10.5 17.4871C10.2348 17.487 9.98053 17.3729 9.79304 17.1697L6.79304 13.9197C6.61088 13.7154 6.51009 13.4417 6.51237 13.1577C6.51465 12.8736 6.61981 12.6019 6.80522 12.401C6.99063 12.2002 7.24144 12.0862 7.50364 12.0838C7.76584 12.0813 8.01844 12.1905 8.20704 12.3878L10.407 14.7712L16.71 5.98859C16.8729 5.76161 17.1123 5.614 17.3756 5.57825C17.6389 5.54249 17.9045 5.62151 18.114 5.79792C18.3236 5.97434 18.4598 6.23369 18.4928 6.51893C18.5258 6.80418 18.4529 7.09194 18.29 7.31892L11.29 17.0689C11.2031 17.1907 11.0932 17.2909 10.9676 17.363C10.8421 17.4351 10.7038 17.4774 10.562 17.4871H10.5Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_273_7958">
        <rect width="12" height="13" fill="currentColor" transform="translate(6.5 5.57031)" />
      </clipPath>
    </defs>
  </Icon>
));

export default CheckIcon;
