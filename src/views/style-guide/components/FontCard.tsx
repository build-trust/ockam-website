import { FunctionComponent } from 'react';
import { Box, Button, Heading, Link } from '@chakra-ui/react';

import { TTypographyContent } from '@root/typings/StyleGuide';

import FontTypeCard from './FontTypeCard';

const FontCard: FunctionComponent<TTypographyContent> = ({ name, fileName, fonts }) => (
  <Box>
    <Box
      display={{ base: 'block', md: 'flex' }}
      mb={{ base: '16px', md: '8px' }}
      justifyContent="space-between"
    >
      <Heading as="h3" size={{ base: 'lg', lg: 'md' }} fontWeight="bold" marginBottom={4}>
        {name}
      </Heading>
      <Link textDecoration="none" href={`/style-guide/fonts/${fileName}.zip`} download>
        <Button>Download the font</Button>
      </Link>
    </Box>
    <Box>
      {fonts.map((font) => (
        <FontTypeCard key={font.heading.toLocaleLowerCase()} {...font} />
      ))}
    </Box>
  </Box>
);

export default FontCard;
