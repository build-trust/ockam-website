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
          <Link href="/style-guide">
            <a style={{ fontWeight: 'bold', color: '#51cbdd', textDecoration: 'underline' }}>
              style guide
            </a>
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default BrandAssetPopover;
