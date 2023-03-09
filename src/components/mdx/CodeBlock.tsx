import { HTMLAttributes } from 'react';

import CopyToClipboard from '@components/CopyToClipboard';

const CodeBlock = ({ children, ...props }: HTMLAttributes<HTMLElement>): JSX.Element => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  const button = props.className ? (
    <CopyToClipboard position="absolute" top={5} right={5} />
  ) : (
    <></>
  );

  return (
    <code {...props}>
      {children}
      {button}
    </code>
  );
};

export default CodeBlock;
