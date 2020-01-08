import getSliceArrayFromPathname from './getSliceArrayFromPathname';

const getRootSlugFromPathname = (pathname) => getSliceArrayFromPathname(pathname)[0];

export default getRootSlugFromPathname;
