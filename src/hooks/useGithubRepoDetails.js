import { useEffect, useState } from 'react';

import { getRepoInfo } from '../api/github';

import useSiteMetadata from './useSiteMetadata';

const useGithubRepoDetails = () => {
  const [details, setDetails] = useState({});
  const { starredRepoUsername, starredRepoName } = useSiteMetadata();
  useEffect(() => {
    const fetchRepoInfo = async () => {
      // eslint-disable-next-line camelcase
      const { stargazers_count, html_url } = await getRepoInfo(
        starredRepoUsername,
        starredRepoName
      );
      setDetails({ stars: stargazers_count, url: html_url });
    };

    fetchRepoInfo();
  }, [starredRepoUsername, starredRepoName]);

  return details;
};

export default useGithubRepoDetails;
