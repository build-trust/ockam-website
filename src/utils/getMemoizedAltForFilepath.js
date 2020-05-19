import generateAltFromFilepath from './generateAltFromFilepath';

const memoizedAlts = new Map([]);

const getMemoizedAltForFilepath = filepath => {
  let memoizedValue = memoizedAlts.get(filepath);
  if (memoizedValue) return memoizedValue;
  memoizedValue = generateAltFromFilepath(filepath);
  memoizedAlts.set(filepath, memoizedValue);
  return memoizedValue;
};

export default getMemoizedAltForFilepath;
