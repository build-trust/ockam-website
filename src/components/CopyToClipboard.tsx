import React, { FunctionComponent } from 'react';
import { BoxProps, IconButton } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

type CopyToClipboardProps = {
  codeText: string;
} & BoxProps;

const copyToClipboard = (codeText: string): void => {
  if (typeof navigator !== 'undefined') navigator.clipboard.writeText(codeText);
};


const CopyToClipboard:FunctionComponent<CopyToClipboardProps> = ({ codeText, ...restProps }) => (
    <IconButton
      aria-label="Copy code to clipboard"
      colorScheme="avocado"
      bgColor="brand.800"
      _hover={{ bgColor: 'brand.900' }}
      size="sm"
      icon={<CopyIcon />}
      zIndex={1}
      // @ts-ignore
      onClick={():void => copyToClipboard(codeText)}
      {...restProps}
    />
  );

CopyToClipboard.propTypes = {

};

export default CopyToClipboard;
