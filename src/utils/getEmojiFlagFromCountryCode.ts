const getEmojiFlagFromCountryCode = (countryCode: string): string => {
  const codePoints = (countryCode || '')
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export default getEmojiFlagFromCountryCode;
