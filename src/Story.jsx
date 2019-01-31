import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import defaultTheme from './theme';
import './styles.g.css';


class Story extends Component {
  render() {
    const {
      children, devtools, locale = 'en', theme = defaultTheme, style,
    } = this.props;
    const t = (a) => {
      return a === 'locale' ? locale : a;
    };
    const i18 = { t };
    const config = {};
    const uapp = {
      i18,
      t,
      config,
      modules: {
        upload: {
          uploadFile: async e => ({ url: e }),
        },
        billing: {
          stores: {
            Transactions: {
              getCardTokenSign: () => {},
            },
          },
        },
      },
      onError: e => console.error(e),
      provide: () => ({ t, config }),
    };
    // return <div>123</div>

    return (
      <ThemeProvider theme={theme}>
        <Provider
          uapp={uapp}
          {...uapp.provide()}
        >
          <div
            style={{
              // width: '80%',
              // fontFamily: 'Gotham Pro',
              // padding: '10px',
              ...style,
            }}
          >
            {children}
            {devtools && <DevTools />}
          </div>
        </Provider>
      </ThemeProvider>

    );
  }
}

export default Story;
