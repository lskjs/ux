/* eslint import/no-extraneous-dependencies: 0 */
import get from 'lodash/get';
import defaultTheme from './theme';

export default (theme, path, defaultValue) =>
  get(theme, path, typeof defaultValue === 'undefined' ? get(defaultTheme, path) : defaultValue);
