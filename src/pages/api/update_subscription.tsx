import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    console.log("About to call update_subscription")
    console.log(request.body)
    const res = await fetch(
        'http://localhost:4050/update_subscription',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ockam-api-key': process.env.OCKAM_API_KEY as string,
            },
            body: JSON.stringify(request.body)
        })

    console.log(res.status)
    if (res.status === 200) {
        const data = await res.json()
        console.log(data)
        response.json(data);
    } else {
        response.status(res.status).send()
    }


}