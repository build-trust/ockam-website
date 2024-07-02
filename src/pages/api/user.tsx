import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    const res = await fetch(
        `http://localhost:4050/enrollment?userid=${request.query.userid}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'ockam-api-key': process.env.OCKAM_API_KEY as string,
            }
        })
    const data = await res.json()
    console.log(data)

    response.json(data);
}