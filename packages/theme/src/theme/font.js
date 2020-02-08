import { rem } from './utils';

const baseRemSize = 1;

const font = {
  family: {
    base: 'medium-content-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  size: {
    root: null,
    base: rem(baseRemSize),
    lg: rem(baseRemSize * 1.25),
    sm: rem(baseRemSize * 0.875),
  },
  weight: {
    light: 300,
    normal: 400,
    bold: 700,
    base: 400,
  },
  height: {
    base: 1.5,
    lg: 2,
    sm: 1.25,
  },
};
export default font;
