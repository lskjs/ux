import { isDev } from '@lskjs/utils/env';
import { withT } from './withT';

export const T = ({ i18, name, ...props }) => {
  const defaultRes = __DEV__ ? name : '';
  if (!i18) return defaultRes;
  try {
    const str = i18.t(name, props);
    return str;
  } catch (err) {
    // eslint-disable-next-line no-console
    if (isDev) console.error('<T />', err);
    return defaultRes;
  }
};

export default withT(T);
