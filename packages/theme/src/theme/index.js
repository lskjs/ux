import colors from './colors';
import variants from './variants';
import typo from './typo';
import font from './font';
import legacy from '../legacy';

export default {
  ...legacy,
  colors: {
    ...legacy.colors,
    colors,
  },
  variants,
  typo,
  font,
};
