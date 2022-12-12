import React, { FunctionComponent } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import mdxComponents from '@components/mdx';
import { IMdxContent } from '@typings/StyleGuide';

type MiscellaneousSectionProps = {
  styleGuideSections: IMdxContent[];
};

const MiscellaneousSection: FunctionComponent<MiscellaneousSectionProps> = ({
  styleGuideSections,
}) => (
  <>
    {styleGuideSections.map(({ frontMatter, source }) => (
      <Box key={frontMatter.title}>
        <Heading as="h3" size="lg">
          {frontMatter.title}
        </Heading>
        <Text>{frontMatter.description}</Text>
        <Flex mt={8} width="100%" flexWrap = "wrap">
          <MDXRemote {...source} components={mdxComponents} />
        </Flex>
      </Box>
    ))}
  </>
);

export default MiscellaneousSection;