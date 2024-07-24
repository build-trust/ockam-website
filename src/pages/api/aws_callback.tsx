import type { NextApiRequest, NextApiResponse } from 'next';

type ParamsType = {
  [key: string]: string;
};
const createQueryString = (params: { [key: string]: string }): string => {
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    urlParams.set(key, value);
  });
  return urlParams.toString();
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  let params: ParamsType = { ...{}, ...request.query };
  if (request.method === 'POST') {
    params = { ...params, ...request.body };
  }
  response.redirect(`/get-started?${createQueryString(params)}`);
}
