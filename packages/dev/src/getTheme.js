/* eslint import/no-extraneous-dependencies: 0 */
import get from 'lodash/get';
import defaultTheme from './theme';

export default (theme, path) => get(theme, path, get(defaultTheme, path));
