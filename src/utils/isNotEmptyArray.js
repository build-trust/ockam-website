import isArray from 'lodash/isArray';

const isNotEmptyArray = arr => arr.length === 0 || !isArray(arr);

export default isNotEmptyArray;
