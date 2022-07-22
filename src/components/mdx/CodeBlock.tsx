import { Code, CodeProps } from '@chakra-ui/react';

// @todo add some kind of syntax highlighter
const CodeBlock = (props: CodeProps): JSX.Element => <Code mb={6} {...props} />;

export default CodeBlock;
