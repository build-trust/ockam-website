const contactFormSchema = {
  first_name: {
    presence: true,
  },
  last_name: {
    presence: true,
  },
  email: {
    presence: true,
    email: {
      message: '^Please use valid email address',
    },
  },
  company: {
    presence: true,
  },
  title: {
    presence: true,
  },
  country: {
    presence: true,
  },
  description: {
    presence: true,
  },
  recaptcha: {
    presence: {
      message: '^Recaptcha is required',
    },
  },
};

export default contactFormSchema;
