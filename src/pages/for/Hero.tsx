import { FC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

import {
  ButtonContainer,
  HeroContainer,
  HeroContentWrapper,
  TextContainer,
} from '@root/views/for/common/HeroContainer';
import { ExcalidrawImage, HeroDescription, HeroHeading } from '@root/views/for/common/HeroText';
import { CONTACT_PAGE_PATH, SIGNUP_PATH } from '@consts/paths';

type Props = {
  text: string;
  subtext: string;
  image: string;
  backgroundImage: string;
};
const Hero: FC<Props> = ({ text, subtext, image, backgroundImage }) => {
  const heroText = (): JSX.Element => (
    <>
      {text.split(/(_\w.*?\w_)/).map((string) => {
        const highlight = string.match(/^_(\w.*?\w)_$/);
        if (highlight) {
          return (
            <Box as="span" color="brand.500">
              {highlight[1]}
            </Box>
          );
        }
        return string;
      })}
    </>
  );

  return (
    <HeroContainer backgroundSrc={backgroundImage}>
      <HeroContentWrapper>
        <TextContainer>
          <HeroHeading style={{ textWrap: 'balance' }}>{heroText()}</HeroHeading>
          <HeroDescription>{subtext} </HeroDescription>
          <ButtonContainer>
            <Button as={NextLink} href={SIGNUP_PATH} variant="primary" h="3.5rem" w="12.5rem">
              Get started
            </Button>
            <Button as={NextLink} href={CONTACT_PAGE_PATH} variant="ghost" h="3.5rem" w="12.5rem">
              Contact us
            </Button>
          </ButtonContainer>
        </TextContainer>
        {image && <ExcalidrawImage src={image} />}
      </HeroContentWrapper>
    </HeroContainer>
  );
};
export default Hero;
