import React from 'react';
import styled from '@emotion/styled';



import Button from '../../Button';
import Link from '../../Link';
import headerSectionImage from '../../../assets/homepage/header-section-image.svg';
import { media } from '../../../utils/emotion';
import Text from '../../Text';
import Heading from '../../Heading';
import PageSection from '../PageSection';

const Section = styled(PageSection)`
  background: ${({ theme }) => theme.colors.background};
  height: calc(100vh - 8rem);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  &::before {
    
    z-index: 1;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
    background-image: url(${headerSectionImage});
    background-repeat: no-repeat;
    background-position: top center;
    opacity: 0.1;
  }

  

  ${media.tablet`
    &::before {
       background-position: top center;
    }
  `}

  ${media.ultraWide`
    text-align: initial;
    min-height: 50rem;
    height: 60vh;
    &::before {
      content: none;
    }
  `}
`;

const HeaderSectionGrid = styled.div`
  z-index: 2;
  display: grid;
  width: 100%;
  grid-template-areas:
    'heading'
    'leadText'
    'ctaButton';
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  ${media.tablet`
    width: 70%;
    margin: 0 auto;
  `};
  ${media.ultraWide`
    width: 100%;
    grid-template-areas: 
      "heading image"
      "leadText image"
      "ctaButton image";
     grid-template-columns: 7fr 5fr;
     grid-column-gap: 3rem;
  `};
`;

const LeadText = styled(Text)`
  grid-area: leadText;
  ${media.desktop`
    
  `};
`;

const ButtonContainer = styled.div`
  grid-area: ctaButton;
`;

const StyledHeading = styled(Heading)`
  grid-area: heading;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const ImageContainer = styled.div`
  grid-area: image;
  align-self: center;
  position: relative;
  display: none;
  ${media.ultraWide`
    display: block;
  `};
`;

const HeaderSection = () => (
  <Section>
    <HeaderSectionGrid>
      <StyledHeading as="h1" fontSize={[5, 6, 8]}>
          Build Connected Systems
        <br />
          You Can Trust. As Simple As It Should Be.
      </StyledHeading>
      <LeadText mt={4}>
          Ockam gives you the tools you need to establish an architecture for
          trust within your connected device applications. We make it simple to
          interconnect secure hardware with software services to facilitate
          trustful exchange of information within IoT systems.
      </LeadText>
      <ButtonContainer>
        <Button mt="5.5rem" variant="white" as={Link} to="/">
            Request a demo
        </Button>
      </ButtonContainer>
      <ImageContainer>
        <Image src={headerSectionImage} />
      </ImageContainer>
    </HeaderSectionGrid>
  </Section>
);

HeaderSection.propTypes = {};

export default HeaderSection;
