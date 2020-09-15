import isPlainObject from 'lodash/isPlainObject';
import clone from 'lodash/clone';
import fileTypes from './fileTypes';

function determineType(src) {
  let [, ext] = src.match(/.+\.(\w+)\??.*$/) || [];
  const isType = Object.keys(fileTypes).includes(ext);
  if (!isType) ext = 'other';
  return ext;
}

export const normalizeFile = (rawItem) => {
  let item;
  if (isPlainObject(rawItem)) {
    item = clone(rawItem);
  } else {
    item = { src: rawItem };
  }
  const src = item.src || item.url || '';
  if (!item.title) {
    item.title = src.substring(src.lastIndexOf('/') + 1);
  }
  if (!item.type) {
    item.type = determineType(src);
  }
  if (!item.image) {
    if (src.match(/[^/]+(jpg|jpeg|exif|bmp|png|gif|tiff|webp|heif)$/)) {
      item.image = src;
    }
  }

  return { src, ...item };
};

const normalizeFiles = (items = []) => (items ? items.map(normalizeFile) : []);

export default normalizeFiles;
