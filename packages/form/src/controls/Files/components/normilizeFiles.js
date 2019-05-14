
export const normalizeFile = (item) => {
  if (typeof item === 'string') return { src: item };
  const { url, ...other } = item;
  return { src: url, ...other };
};

const normalizeFiles = (items = []) => (
  items.map(normalizeFile)
);

export default normalizeFiles;
