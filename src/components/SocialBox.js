import React from 'react';
import LinkedinShareButton from "react-share/es/LinkedinShareButton";
import LinkedinSquare from "emotion-icons/fa-brands/Linkedin";
import TwitterShareButton from "react-share/es/TwitterShareButton";
import Twitter from "emotion-icons/fa-brands/Twitter";
import FacebookShareButton from "react-share/es/FacebookShareButton";
import FacebookSquare from "emotion-icons/fa-brands/FacebookSquare";

import useLocation from "../hooks/useLocation";

import ShareButton from "./blog/ShareButton";
import Heading from "./Heading";

const SocialBox = () => {
  const location = useLocation();
  const url = location.href || '';
  return (
    <div>
      <Heading as="h6">Share</Heading>
      <ShareButton button={LinkedinShareButton} icon={LinkedinSquare} url={url}>
        LinkedIn
      </ShareButton>
      <ShareButton button={TwitterShareButton} icon={Twitter} url={url}>
        Twitter
      </ShareButton>
      <ShareButton button={FacebookShareButton} icon={FacebookSquare} url={url}>
        Facebook
      </ShareButton>
    </div>
  );
};

export default SocialBox;
