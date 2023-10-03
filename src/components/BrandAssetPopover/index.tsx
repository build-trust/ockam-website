// import { FunctionComponent, useContext, RefObject } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';

const BrandColorLink = styled(Link)`
  text-decoration: none;
  color: #51cbdd;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
type BrandAssetHelperProps = {
  isOpen: boolean | undefined;
  onClose(): void;
};
const BrandAssetPopover = (props: BrandAssetHelperProps): JSX.Element | null => {
  const { isOpen, onClose } = props;
  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      closeOnBlur
    >
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Looking for our logo?</PopoverHeader>
        <PopoverBody>
          You can find our logo and the rest of our brand assets over in the{' '}
          <BrandColorLink href="/style-guide">style guide</BrandColorLink>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default BrandAssetPopover;
