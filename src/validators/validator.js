import validate from 'validate.js';

const validator = schema => values => validate(values, schema);

export default validator;
