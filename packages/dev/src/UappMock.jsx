import React from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from '@lskjs/theme';
import createUappMock from './createUappMock';

export default ({ children, theme = defaultTheme, ...props }) => {
  const uapp = createUappMock(props);
  window.uapp = uapp;
  if (window.parent) window.parent.uapp = uapp;
  const providers = uapp.provide();
  console.log({providers});
  
  return (
    <Provider {...providers}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
