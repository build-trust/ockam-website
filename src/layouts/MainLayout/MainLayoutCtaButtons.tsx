import { FunctionComponent, ReactElement } from 'react';
import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';

import { CONTACT_FORM_PATH, SIGNUP_PATH } from '@consts/paths';

const SignUpButton = styled(Button)`
  background: white;

  .scrolled & {
    background: #4fdab8;

    &:hover {
      background: #3ac6a3;
    }
  }
`;

type Props = {
  landingPage?: boolean;
};
const MainLayoutCtaButtons: FunctionComponent<Props> = ({ landingPage }) => {
  const buttonsSize = useBreakpointValue({ base: 'lg', lg: 'md' });
  const contactHref = landingPage ? '#contact' : CONTACT_FORM_PATH;

  const signup = (): ReactElement => (
    <Link href={SIGNUP_PATH} passHref legacyBehavior>
      <SignUpButton variant="solid" colorScheme="avocado" size={buttonsSize} color="black">
        Sign Up
      </SignUpButton>
    </Link>
  );

  const buttons = (): JSX.Element => {
    if (landingPage) {
      return (
        <Link href={contactHref} passHref legacyBehavior>
          <Button as="a" variant="solid" colorScheme="avocado" size={buttonsSize} color="black">
            Get a Demo
          </Button>
        </Link>
      );
    }
    return <>{signup()}</>;
  };

  return (
    <Flex
      w={{ base: 'full', lg: 'auto' }}
      align={{ base: 'stretch', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      {buttons()}
    </Flex>
  );
};

export default MainLayoutCtaButtons;
