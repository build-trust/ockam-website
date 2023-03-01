import React, { FunctionComponent } from 'react';
import { BoxProps, Icon, IconButton } from '@chakra-ui/react';

import CopyIcon from '@assets/icons/copy.svg';

type CopyToClipboardProps = {
  codeText?: string;
} & BoxProps;

const copyToClipboard = (codeText: string): void => {
  if (typeof navigator !== 'undefined') navigator.clipboard.writeText(codeText);
};

const copyClicked = (event: MouseEvent): void => {
  const el = event.target as HTMLElement;
  let codeText;
  if (el.dataset.code) {
    codeText = el.dataset.code;
  } else {
    codeText = el.closest('code')?.innerText;
  }
  if (!codeText) codeText = '';
  copyToClipboard(codeText);
};

const CopyToClipboard: FunctionComponent<CopyToClipboardProps> = ({ codeText, ...restProps }) => (
  <IconButton
    aria-label="Copy code to clipboard"
    colorScheme="avocado"
    bgColor="transparent"
    _hover={{ bgColor: 'brand.900' }}
    size="sm"
    icon={<Icon as={CopyIcon} w={6} h={6} />}
    zIndex={1}
    data-code={codeText}
    // @ts-ignore
    onClick={copyClicked}
    {...restProps}
  />
);

CopyToClipboard.propTypes = {};

export default CopyToClipboard;
