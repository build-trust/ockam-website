import { FunctionComponent } from 'react';
import { Stack , Heading, Text, Image, Flex } from '@chakra-ui/react';



type StyleGuideResourceCaptionProps= {
  title?: string,
  description?: string,
  image: string
}

const StyleGuideResourceCaption: FunctionComponent<StyleGuideResourceCaptionProps> = ({
  title,
  description,
  image,
  ...restProps
}) => (
    <Stack spacing={3} maxWidth="371px" width="100%" {...restProps}>
      <Image src = {image} maxWidth="100%"/>
      <Flex  flexDirection="column" width="100%">
      {title && <Heading as='h5' fontSize='1.125rem'>{title}</Heading>}
      { description && <Text fontWeight="400">{description}</Text> }
      </Flex>
    </Stack>
  );


export default StyleGuideResourceCaption;
