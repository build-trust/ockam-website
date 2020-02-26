import contactFormSchema from './schemas/contactFormSchema';
import validator from './validator';

const contactFormValidator = validator(contactFormSchema);

export default contactFormValidator;
