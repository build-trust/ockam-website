const removeStartEndSlugSlush = slug => {
  return slug.replace(/\/$/, '').replace(/^\//, '');
};

export default removeStartEndSlugSlush;
