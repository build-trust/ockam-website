import { AnnotationHandler, InnerToken } from 'codehike/code';
import { SmoothPre } from './SmoothPre';

export const tokenTransitions: AnnotationHandler = {
  name: 'token-transitions',
  PreWithRef: SmoothPre,
  Token: (props) => {
    return <InnerToken merge={props} style={{ display: 'inline-block' }} />;
  },
};
