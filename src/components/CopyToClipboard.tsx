import React, { FunctionComponent, MouseEvent, MouseEventHandler } from 'react';
import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';

import CopyIcon from '@assets/icons/copy.svg';

type CopyToClipboardProps = Omit<IconButtonProps, 'aria-label'> & {
  codeText?: string;
  'aria-label'?: string;
};

const copyToClipboard = (codeText: string): void => {
  if (typeof navigator !== 'undefined') navigator.clipboard.writeText(codeText);
};

const copyClicked: MouseEventHandler = (event: MouseEvent<HTMLButtonElement>): void => {
  const el = event.target as HTMLElement;
  let codeText = (el.closest('Button[data-code]') as HTMLElement)?.dataset.code;
  if (!codeText) {
    codeText = el.closest('code')?.innerText;
  }
  if (!codeText) codeText = '';
  copyToClipboard(codeText);
};

const CopyToClipboard: FunctionComponent<CopyToClipboardProps> = ({ codeText, ...restProps }) => (
  <IconButton
    colorScheme="avocado"
    bgColor="transparent"
    _hover={{ bgColor: 'brand.900' }}
    size="sm"
    icon={<Icon as={CopyIcon} w={6} h={6} />}
    zIndex={1}
    data-code={codeText}
    onClick={copyClicked}
    {...restProps}
    aria-label="Copy code to clipboard"
  />
);

CopyToClipboard.propTypes = {};

export default CopyToClipboard;
