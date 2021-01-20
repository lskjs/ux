import { createContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react';
import merge from 'lodash.merge';
import { themeComposer, theme as buttonTheme } from './theme';

const defaultContext = {
  _contextProvided: false,
};

export const ButtonContext = createContext(defaultContext);
ButtonContext.displayName = 'ButtonContext';

export const ButtonConsumer = ButtonContext.Consumer;

export const ButtonProvider = ({ value, theme, children }) => {
  const context = merge(defaultContext, { _contextProvided: true }, value);
  let extendedTheme = {};
  if (typeof theme === 'function') extendedTheme = theme(buttonTheme);
  else extendedTheme = merge(buttonTheme, theme || {});
  const defaultTheme = themeComposer(extendedTheme);
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonContext.Provider value={context}>
        {children}
      </ButtonContext.Provider>
    </ThemeProvider>
  );
};

ButtonProvider.propTypes = {
  value: PropTypes.objectOf(Object),
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(Object)]),
  children: PropTypes.node,
};

ButtonProvider.defaultProps = {
  value: {},
  theme: undefined,
  children: undefined,
};
