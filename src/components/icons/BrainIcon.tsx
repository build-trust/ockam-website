import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const BrainIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path
      d="M21.65 12.727C20.75 13.527 19.65 13.977 18.5 14.077C18.3 15.377 17.45 16.477 16.2 16.877C16.15 16.877 16.1 16.927 16.05 16.927C15.85 16.927 15.65 16.777 15.6 16.577C15.5 16.327 15.65 16.027 15.9 15.927C16.9 15.577 17.55 14.627 17.55 13.577C17.55 12.877 17.25 12.177 16.7 11.727C16.5 11.527 16.5 11.227 16.65 11.027C16.85 10.827 17.15 10.827 17.35 10.977C17.95 11.527 18.35 12.277 18.45 13.077C19.5 12.977 20.45 12.527 21.2 11.727C22 10.877 22.45 9.77695 22.45 8.62695C22.45 6.12695 20.45 4.12695 17.95 4.12695C17.9 4.12695 17.85 4.12695 17.8 4.12695C17.6 4.12695 17.4 3.97695 17.3 3.77695C17 2.82695 16.05 2.12695 15 2.12695C13.6 2.12695 12.5 3.22695 12.5 4.62695C12.5 6.02695 13.6 7.12695 15 7.12695C15.3 7.12695 15.5 7.32695 15.5 7.62695C15.5 7.92695 15.3 8.12695 15 8.12695C13.75 8.12695 12.6 7.42695 12 6.42695C11.4 7.42695 10.25 8.12695 9 8.12695C8.7 8.12695 8.5 7.92695 8.5 7.62695C8.5 7.32695 8.7 7.12695 9 7.12695C10.4 7.12695 11.5 6.02695 11.5 4.62695C11.5 3.22695 10.4 2.12695 9 2.12695C7.95 2.12695 7 2.82695 6.65 3.82695C6.6 4.02695 6.4 4.17695 6.15 4.17695C6.1 4.17695 6.05 4.17695 6 4.17695C3.5 4.17695 1.5 6.17695 1.5 8.67695C1.5 9.82695 1.95 10.927 2.75 11.777C3.5 12.527 4.45 13.027 5.5 13.127C5.6 12.327 6 11.577 6.6 11.027C6.8 10.827 7.1 10.877 7.3 11.077C7.5 11.277 7.45 11.577 7.25 11.777C6.8 12.227 6.5 12.927 6.5 13.627C6.5 14.677 7.15 15.627 8.15 15.977C8.4 16.077 8.55 16.377 8.45 16.627C8.4 16.827 8.2 16.977 8 16.977C7.95 16.977 7.9 16.977 7.85 16.927C6.6 16.477 5.75 15.377 5.55 14.127C4.35 14.027 3.25 13.577 2.4 12.777C1.8 13.227 1.5 13.877 1.5 14.627C1.5 15.427 1.9 16.177 2.55 16.677C2.75 16.827 2.8 17.027 2.75 17.227C2.6 17.727 2.5 18.177 2.5 18.627C2.5 21.127 4.5 23.127 7 23.127C9.5 23.127 11.5 21.127 11.5 18.627V10.627C11.5 10.327 11.7 10.127 12 10.127C12.3 10.127 12.5 10.327 12.5 10.627V18.627C12.5 21.127 14.5 23.127 17 23.127C19.5 23.127 21.5 21.127 21.5 18.627C21.5 18.177 21.4 17.727 21.25 17.227C21.2 17.027 21.25 16.777 21.45 16.677C22.1 16.227 22.5 15.427 22.5 14.627C22.5 13.877 22.2 13.227 21.65 12.727Z"
      fill="currentColor"
    />
  </Icon>
));

export default BrainIcon;