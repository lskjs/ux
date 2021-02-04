import React, { createContext, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Theme, ThemeProvider } from '@emotion/react';
import merge from 'lodash.merge';
import { themeComposer, theme as buttonTheme } from './theme';

const defaultContext = {
  _contextProvided: false,
};

export const ButtonContext = createContext(defaultContext);
export const ButtonConsumer = ButtonContext.Consumer;

interface ButtonProviderProps<T> {
  value?: T;
  theme?: Theme | ((arg0: Theme) => Theme);
  children: ReactNode;
}

export const ButtonProvider: FC<ButtonProviderProps<Object>> = ({ value = {}, theme = {}, children }) => {
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
  value: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.oneOfType([PropTypes.instanceOf(Object)]),
  children: PropTypes.node,
};

ButtonProvider.defaultProps = {
  value: {},
  theme: undefined,
  children: undefined,
};
