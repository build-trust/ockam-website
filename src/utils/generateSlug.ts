// eslint-disable-next-line import/prefer-default-export
export const generateSlug = (text: string): string =>
  text
    ? text
        .toString()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
    : '';
