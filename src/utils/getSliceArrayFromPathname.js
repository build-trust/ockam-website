const getSliceArrayFromPathname = (pathname) => pathname.split('/').filter(slug => slug !== '');

export default getSliceArrayFromPathname;
