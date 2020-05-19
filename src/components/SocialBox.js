import React from 'react';
import LinkedinShareButton from 'react-share/es/LinkedinShareButton';
import LinkedinSquare from 'emotion-icons/fa-brands/Linkedin';
import TwitterShareButton from 'react-share/es/TwitterShareButton';
import Twitter from 'emotion-icons/fa-brands/Twitter';
import FacebookShareButton from 'react-share/es/FacebookShareButton';
import FacebookSquare from 'emotion-icons/fa-brands/FacebookSquare';
import styled from '@emotion/styled';

import useLocation from '../hooks/useLocation';

import ShareButton from './blog/ShareButton';

const Container = styled('div')`
  display: flex;
  justify-content: space-around;
  padding: 2.2rem 0;
  box-shadow: 0px -10px 29px -15px
    ${({ theme }) => theme.colors.accentBackground};
`;

const SocialBox = () => {
  const location = useLocation();
  const url = location.href || '';
  return (
    <Container>
      <ShareButton
        button={LinkedinShareButton}
        icon={LinkedinSquare}
        url={url}
      />
      <ShareButton button={TwitterShareButton} icon={Twitter} url={url} />
      <ShareButton
        button={FacebookShareButton}
        icon={FacebookSquare}
        url={url}
      />
    </Container>
  );
};

export default SocialBox;
