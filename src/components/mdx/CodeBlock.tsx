import { HTMLAttributes } from 'react';

import CopyToClipboard from '@components/CopyToClipboard';

const CodeBlock = ({ children, ...props }: HTMLAttributes<HTMLElement>): JSX.Element => (
  <code {...props}>
    {children}
    <CopyToClipboard position="absolute" top={5} right={5} />
  </code>
);

export default CodeBlock;
