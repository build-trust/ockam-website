import { FunctionComponent } from 'react';
import { Stack , Heading, Text } from '@chakra-ui/react';



type StyleGuideResourceCaptionProps= {
  title: string,
  description: string,
}

const StyleGuideResourceCaption: FunctionComponent<StyleGuideResourceCaptionProps> = ({
  title,
  description,
  ...restProps
}) => (
    <Stack spacing={3}  {...restProps}>
      {title && <Heading as='h5' fontSize='1.125rem'>{title}</Heading>}
      <Text fontWeight="400">{description}</Text>
    </Stack>
  );


export default StyleGuideResourceCaption;
