import isString from 'lodash/isString';

const generateAltFromFilepath = filepath => {
  if (!isString(filepath)) return '';
  const filepathArray = filepath.split('/');
  const fileName = filepathArray[filepathArray.length - 1];
  const altArray = fileName.split('.');
  const alt = altArray
    .slice(0, altArray.length - 2)
    .map(item => item.replace(/-/g, ' '))
    .join(' ');
  return alt;
};

export default generateAltFromFilepath;
