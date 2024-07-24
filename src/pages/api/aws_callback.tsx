import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    const params = request.body;

    if ('x-amzn-marketplace-token' in params) {
        response.redirect(`/get-started?${JSON.stringify(params)}`);
    } else {
        response.redirect('/')
    }
}