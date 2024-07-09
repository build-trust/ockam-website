import { FormEvent, ReactElement, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
    Box,
    Button,
    GridItem,
    SimpleGrid,
    chakra,
} from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { MainLayout } from '@root/layouts';
import FormInput from '@components/FormInput';
import SEOHead from '@components/SEOHead';


const FIELDS = [
    {
        name: 'companyName',
        type: 'text',
        required: true,
        placeholder: 'Company name',
        label: 'Company name',
        errorMsg: 'Please provide your company name',
    },
    {
        name: 'contactPerson',
        type: 'text',
        required: true,
        placeholder: 'Contact person',
        label: 'Contact person',
        errorMsg: 'Please provide the best contact name',
    },
    {
        name: 'contactPhone',
        type: 'tel',
        required: true,
        placeholder: 'Contact phone',
        label: 'Contact phone',
        errorMsg: 'Please provide a contact phone number',
    },
    {
        name: 'contactEmail',
        type: 'email',
        required: true,
        placeholder: 'Email address',
        label: 'Email address',
        errorMsg: 'Please provide an email address',
    },
]

const FulfillmentPage: NextPageWithLayout = () => {
    let isSubmitting = false

    const { clearErrors, setError, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        isSubmitting = true
        clearErrors()

        const formData = new FormData(event.currentTarget)
        const request: { [key: string]: string } = {}

        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of formData.entries()) {
            request[key] = value
        }

        const response = await fetch('/api/fulfillment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })

        const data = await response.json()

        if (data.valid === false) {
            const props = Object.getOwnPropertyNames(data.errors)
            for (let i = 0; i < props.length; i += 1) {
                setError(props[i], {})
            }
        } else {
            router.push('/get-started')
        }
        isSubmitting = false
    };

    return (
        <Box pt={{ base: '120px' }}>
            <SEOHead title="Ockam - Contact Information" />
            <chakra.form onSubmit={onSubmit}>
                <SimpleGrid
                    columns={1}
                    spacingX={10}
                    spacingY={{ base: 4, md: 7 }}
                    pos="relative"
                    w="full"
                >
                    {FIELDS.map((field) => (
                        <GridItem key={field.name}
                            justifySelf="center"
                            mt={{ base: 2, md: 1 }}
                            w={{ base: '80%', md: '60%' }}>
                            {/* @ts-ignore */}
                            <FormInput
                                name={field.name}
                                type={field.type}
                                label={field.label}
                                placeholder={field.placeholder}
                                errorMessage={field.errorMsg}
                                isRequired={field.required}
                                isInvalid={!!errors[field.name]}
                                isDisabled={isSubmitting}
                            />
                        </GridItem>
                    ))}

                    <input type="hidden" name="customer" value={router.query.customer as string} />
                    <input type="hidden" name="product" value={router.query.product as string} />

                    <GridItem
                        colStart={1}
                        justifySelf="center"
                        mt={{ base: 2, md: 1 }}
                        w={{ base: '80%', md: '60%' }}
                    >
                        <Button
                            colorScheme="avocado"
                            type="submit"
                            color="black"
                            w="full"
                            disabled={isSubmitting}
                            isLoading={isSubmitting}
                        >
                            Submit
                        </Button>
                    </GridItem>
                </SimpleGrid>
            </chakra.form>
            \
        </Box >
    );
}

FulfillmentPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default FulfillmentPage