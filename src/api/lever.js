import apiFetch from "./apiFetch";

// eslint-disable-next-line import/prefer-default-export
export const getOckamJobs = () => apiFetch('postings/ockam?mode=json');
