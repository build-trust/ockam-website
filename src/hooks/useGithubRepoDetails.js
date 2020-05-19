import { useEffect, useState } from 'react';

import { getRepoInfo } from '../api/github';

const useGithubRepoDetails = () => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    const fetchRepoInfo = async () => {
      // eslint-disable-next-line camelcase
      const { stargazers_count, html_url } = await getRepoInfo(
        'ockam-network',
        'ockam'
      );
      setDetails({ stars: stargazers_count, url: html_url });
    };

    fetchRepoInfo();
  }, []);

  return details;
};

export default useGithubRepoDetails;
