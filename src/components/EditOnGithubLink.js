import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import GithubIcon from "emotion-icons/simpleIcons/GitHub";

import useSiteMetadata from "../hooks/useSiteMetadata";

import Icon from "./Icon";
import Link from "./Link";
import Button from "./Button";

const Container = styled('div')`
  padding: 3.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const findRepoByFilePath = (filePath, infos) => {
  return infos.find(item => {
    const reg = new RegExp(item.slug);
    return reg.test(filePath);
  })
};

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
      <Button as={Link} variant="secondary" to={githubUrl} target="_blank">
        <Icon mr={2} size={20} color="primary" icon={GithubIcon} />
        Edit this page
      </Button>
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
