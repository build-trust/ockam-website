import {
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverTrigger,
} from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';
import { ReactNode } from 'react';

const BrandColorLink = styled(Link)`
  text-decoration: underline;
  font-weight: bold;
`;

type BrandAssetHelperProps = {
  children: ReactNode;
  bg?: string;
  isOpen: boolean | undefined;
  onClose(): void;
};
const BrandAssetPopover = ({
  children,
  isOpen,
  onClose,
  bg = 'white',
}: BrandAssetHelperProps): JSX.Element | null => (
  <Popover
    returnFocusOnClose={false}
    placement="bottom"
    closeOnBlur
    isOpen={isOpen}
    onClose={onClose}
  >
    {children}
    <PopoverContent bg={bg} maxW="100vw">
      <PopoverArrow bg={bg} />
      <PopoverCloseButton />
      <PopoverHeader borderBottom="none">Looking for our logo?</PopoverHeader>
      <PopoverBody>
        You can find our logo and the rest of our brand assets over in the{' '}
        <BrandColorLink href="/style-guide" onClick={onClose}>
          style guide
        </BrandColorLink>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export const BrandAssetPopoverTrigger = PopoverTrigger;

export default BrandAssetPopover;
