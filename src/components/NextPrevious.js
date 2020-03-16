import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ArrowLeft from 'emotion-icons/ion-md/ArrowBack';
import ArrowRight from 'emotion-icons/ion-md/ArrowForward';
import { space, typography } from 'styled-system';
import { rgba } from 'polished';

import usePrevNextNavigate from '../hooks/usePrevNextNavigate';

import Link from './Link';
import Icon from './Icon';
import Caption from './Caption';

const StyledIcon = styled(Icon)`
  transition: all 200ms ease-in-out;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  margin-top: 3rem;
`;

const Title = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.dark};
  font-weight: ${props => props.theme.fontWeights.heading};
  transition: all 200ms ease-in-out;
`;

const NavigationButton = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.accentBackground};
  border-radius: 4px;
  padding: 0.125rem;
  transition: all 200ms ease-in-out;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.button.secondaryHover};
    ${Title} {
      color: ${({ theme }) => theme.colors.button.secondaryHover};
    }
    ${StyledIcon} {
      color: ${({ theme }) => theme.colors.button.secondaryHover};
    }
  }
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.button.secondaryActive};
    ${Title} {
      color: ${({ theme }) => theme.colors.button.secondaryActive};
    }
    ${StyledIcon} {
      color: ${({ theme }) => theme.colors.button.secondaryActive};
    }
  }
  box-shadow: ${({ theme }) =>
    `0 3px 8px 0 ${rgba(theme.colors.accentBackground, 0.6)}`};
`;

const NavigationButtonPrev = styled(NavigationButton)``;

const NavigationButtonNext = styled(NavigationButton)`
  justify-content: flex-end;
  margin-left: 1rem;
`;

const Content = styled('div')(space, typography);

const NextPrevious = ({ currentNode, rootSlug }) => {
  const { isFirst, isLast, nextNode, prevNode } = usePrevNextNavigate({
    currentNode,
    rootSlug,
  });

  return (
    <Container>
      {!isFirst ? (
        <NavigationButtonPrev to={prevNode.url}>
          <StyledIcon icon={ArrowLeft} size={16} ml={3} />
          <Content ml="auto" mr={3} py={3} textAlign="right">
            <Caption mb={1} display="block">
              Previous
            </Caption>
            <Title>{prevNode.title}</Title>
          </Content>
        </NavigationButtonPrev>
      ) : null}
      {!isLast ? (
        <NavigationButtonNext to={nextNode.url}>
          <Content ml={3} mr="auto" py={3} textAlign="left">
            <Caption mb={1} display="block">
              Next
            </Caption>
            <Title>{nextNode.title}</Title>
          </Content>
          <StyledIcon icon={ArrowRight} size={16} mr={3} />
        </NavigationButtonNext>
      ) : null}
    </Container>
  );
};

NextPrevious.propTypes = {
  currentNode: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  rootSlug: PropTypes.string,
};

NextPrevious.defaultProps = {
  rootSlug: '',
};

export default NextPrevious;
