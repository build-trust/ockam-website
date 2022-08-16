import { Heading, HeadingProps, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FunctionComponent } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const CustomHeading: FunctionComponent<HeadingProps> = ({ as, id, ...props }) => {
  if (id) {
    return (
      <Heading as={as} id={id} {...props}>
        <NextLink href={`#${id}`} passHref>
          <ChakraLink
            _hover={{
              svg: {
                display: 'initial',
              },
              textDecoration: 'none',
            }}
          >
            {props.children}

            <ExternalLinkIcon
              display="none"
              fontSize="0.6em"
              color="gray.600"
              ml={2}
              verticalAlign="center"
            />
          </ChakraLink>
        </NextLink>
      </Heading>
    );
  }

  return <Heading as={as} {...props} />;
};

const h1 = (props: HeadingProps): JSX.Element => (
  <CustomHeading
    as="h1"
    fontSize={{ base: '2xl', lg: '2.5xl' }}
    mb={{ base: 6, lg: 10 }}
    {...props}
  />
);
const h2 = (props: HeadingProps): JSX.Element => (
  <CustomHeading as="h2" fontSize={{ base: 'xl', lg: '2xl' }} mb={{ base: 4, lg: 6 }} {...props} />
);
const h3 = (props: HeadingProps): JSX.Element => (
  <CustomHeading as="h3" fontSize={{ base: 'lg', lg: 'xl' }} mb={{ base: 4, lg: 6 }} {...props} />
);
const h4 = (props: HeadingProps): JSX.Element => (
  <CustomHeading as="h4" fontSize={{ base: 'md', lg: 'lg' }} {...props} />
);
const h5 = (props: HeadingProps): JSX.Element => (
  <CustomHeading as="h5" fontSize={{ base: 'sm', lg: 'md' }} {...props} />
);
const h6 = (props: HeadingProps): JSX.Element => (
  <CustomHeading as="h6" fontSize={{ base: 'xs', lg: 'sm' }} {...props} />
);

const headingsComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};

export default headingsComponents;
