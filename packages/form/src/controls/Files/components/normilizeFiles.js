
import fileTypes from './fileTypes';

function determineType(src) {
  let [, ext] = src.match(/.+\.(\w+)\??.*$/) || [];
  const isType = Object.keys(fileTypes).includes(ext);
  if (!isType) ext = 'other';
  return ext;
}

export const normalizeFile = (item) => {
  if (typeof item === 'string') return { src: item };
  const { url, type, src: initSrc, image, ...props } = item;

  const src = initSrc || url || '';

  if (!props.title) {
    props.title = src.substring(src.lastIndexOf('/') + 1);
  }
  if (!props.type) {
    props.type = determineType(src);
  }
  if (!props.image) {
    if (src.match(/[^/]+(jpg|jpeg|exif|bmp|png|gif|tiff|webp|heif)$/)) {
      props.image = src;
    }
  }

  return { src, ...props };
};

const normalizeFiles = (items = []) => (
  items ? items.map(normalizeFile) : []
);

export default normalizeFiles;
