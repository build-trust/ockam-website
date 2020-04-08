import config from '../../config';

import apiFetch from './apiFetch';

const {
  api: { githubUrl },
} = config;

// eslint-disable-next-line import/prefer-default-export
export const getRepoInfo = (username, reponame) => apiFetch(githubUrl,`repos/${username}/${reponame}`);
