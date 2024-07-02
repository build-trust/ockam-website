import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    const res = await fetch(
        'http://localhost:4050/resolve_aws_customer',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ockam-api-key': process.env.OCKAM_API_KEY as string,
            },
            body: JSON.stringify(request.query)
        })
    console.log(res.status)
    console.log(res.body)

    const data = await res.json()
    console.log(data)

    response.redirect(`/get-started?customer=${data.customer_id}&product=${data.product}`);
}