import React from 'react';
import StartIcon from 'emotion-icons/ion-ios/Star';
import styled from "@emotion/styled";

import useGithubRepoDetails from "../hooks/useGithubRepoDetails";

import Icon from "./Icon";
import Link from "./Link";
import Button from "./Button";
import Badge from "./Badge";

const GithubStarLink = styled(Button)`
  padding-left: 0;
  padding-right: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  :hover {
    svg {
    color: ${props => props.theme.colors.githubStarButton.icon};
    }
  } 
`;

const StarGithubRepo = () => {
  const { stars, url } = useGithubRepoDetails();
  return (
    <GithubStarLink variant="link" to={url} target="_blank" as={Link}>
      <Icon maxWidth='initial' mr={2} icon={StartIcon} size={20} />
      Star Ockam repo
      <Badge ml={2}>{stars}</Badge>
    </GithubStarLink>
  );
};

export default StarGithubRepo;
