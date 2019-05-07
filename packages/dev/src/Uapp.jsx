import React from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from '@lskjs/theme';
import createUappMock from './createUappMock';


export default ({ children, locale = 'en', theme = defaultTheme }) => {
  const uapp = createUappMock({ locale });
  window.uapp = uapp;
  if (window.parent) window.parent.uapp = uapp;
  return (
    <Provider uapp={uapp} {...uapp.provide()}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
};
