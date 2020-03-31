import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import GithubIcon from "emotion-icons/simpleIcons/GitHub";

import useSiteMetadata from "../hooks/useSiteMetadata";

import Icon from "./Icon";
import Link from "./Link";

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const findRepoByFilePath = (filePath, infos) => {
  return infos.find(item => {
    const reg = new RegExp(item.slug);
    return reg.test(filePath);
  })
};

const GithubLink = styled(Link)`
  font-weight: 500;
  display: flex;
  justify-content: center;  
`

const generateDependedGithubUrl = (repo, filePath) => {
  const slugPathLength = repo.slug.split('/').length;
  const githubFilePath = filePath.split("/").slice(slugPathLength).join("/");
  return `${repo.githubUrl}/${githubFilePath}`;
};

const EditOnGithubLink = ({ filePath, dependedRepos}) => {
  const {ockamWebsiteRepo, markdownPath, githubProductionPath} = useSiteMetadata();
  const repo = findRepoByFilePath(filePath, dependedRepos);
  const githubUrl = repo ? generateDependedGithubUrl(repo, filePath) : `${ockamWebsiteRepo}/${githubProductionPath}/${markdownPath}/${filePath}`;

  return (
    <Container>
      <GithubLink as={Link} to={githubUrl} target="_blank">
        <Icon mr={2} size={20} icon={GithubIcon} />
        Edit this page
      </GithubLink>
    </Container>
  );
};

EditOnGithubLink.propTypes = {
  filePath: PropTypes.string.isRequired,
  dependedRepos: PropTypes.arrayOf(PropTypes.shape({
    githubUrl: PropTypes.string,
    slug: PropTypes.string,
  })),
};

EditOnGithubLink.defaultProps = {
  dependedRepos: [],
};

export default EditOnGithubLink;
