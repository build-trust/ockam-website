import { Heading, HeadingProps } from '@chakra-ui/react';

const commonStyles = {
  fontSize: { base: 'xl', sm: '3xl' },
  mb: { base: 6, sm: 10 },
};

const h1 = (props: HeadingProps): JSX.Element => <Heading as="h1" {...commonStyles} {...props} />;
const h2 = (props: HeadingProps): JSX.Element => <Heading as="h2" {...commonStyles} {...props} />;
const h3 = (props: HeadingProps): JSX.Element => <Heading as="h3" {...commonStyles} {...props} />;
const h4 = (props: HeadingProps): JSX.Element => <Heading as="h4" {...commonStyles} {...props} />;
const h5 = (props: HeadingProps): JSX.Element => <Heading as="h5" {...commonStyles} {...props} />;
const h6 = (props: HeadingProps): JSX.Element => <Heading as="h6" {...commonStyles} {...props} />;

const headingsComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};

export default headingsComponents;
