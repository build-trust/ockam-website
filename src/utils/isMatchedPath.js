import isString from 'lodash/isString';

import removeStartEndSlugSlash from "./removeStartEndSlugSlash";

const excludeLastChunkFromSlug = (slug) => {
  if(!isString(slug)) return slug;
  return slug.split("/").filter(item => item !== '').slice(0, -1).join('/')
};

const isMatchingPath = (currentPath, pathToCheck)  => {
  const isSamePath = currentPath === pathToCheck;
  if(isSamePath) return true;

  const isInNestedRootPath = excludeLastChunkFromSlug(currentPath) === excludeLastChunkFromSlug(pathToCheck);
  if(isInNestedRootPath) return true;

  const isNestedPath = excludeLastChunkFromSlug(currentPath) === removeStartEndSlugSlash(pathToCheck);
  return isNestedPath;
};

export default isMatchingPath;
