import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const data = request.body
    const errors: { [key: string]: string } = {}
    let valid = true;

    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
        if (Object.hasOwn(data, key)) {
            const value = data[key]
            if (value.length === 0) {
                valid = false
                errors[key] = "Too short"
            }
        }
    }

    const email = data?.contactEmail
    if (email && !email.includes('@')) {
        valid = false
        errors.contactEmail = "Invalid email"
    }

    if (valid) {
        try {
            const res = await fetch(
                'http://localhost:4050/fulfillment',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'ockam-api-key': process.env.OCKAM_API_KEY,
                    },
                    body: JSON.stringify(request.body)
                })

            if (res.status !== 200) {
                valid = false
                errors.submit = "Failed to submit"
            }
        } catch (error) {
            valid = false
            errors.submit = "Failed to submit"
        }
    }

    if (valid) {
        response.json({ valid });
    } else {
        response.json({ valid, errors });
    }

}