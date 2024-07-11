import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    const res = await fetch(
        `${process.env.OCKAM_API_BASE_URL}/enrollment?userid=${request.query.userid}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'ockam-api-key': process.env.OCKAM_API_KEY as string,
            }
        })
    const data = await res.json()
    response.json(data);
}