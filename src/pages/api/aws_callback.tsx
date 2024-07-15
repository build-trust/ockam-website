import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    const params = request.body;
    if ('x-amzn-marketplace-token' in params) {
        const res = await fetch(
            `${process.env.OCKAM_API_BASE_URL}/resolve_aws_customer`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'ockam-api-key': process.env.OCKAM_API_KEY as string,
                },
                body: JSON.stringify(params)
            })
        if (res.status !== 200) {
            response.redirect('/get-started');
        } else {
            const data = await res.json()
            response.redirect(`/get-started?customer=${data.customer_id}&product=${data.product}`);
        }
    } else {
        response.redirect('/get-started');
    }
}