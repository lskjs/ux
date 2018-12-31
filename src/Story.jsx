import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'mobx-react';
import theme from './utils/theme';

import './antd.g.css';
import './bootstrap.g.css';

class Story extends Component {
  render() {
    const { children, locale = 'en' } = this.props;
    const t = (a) => {
      return a === 'locale' ? locale : a;
    };
    const config = {};
    const uapp = {
      t,
      config,
      modules: {},
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
          <div style={{
            // width: '80%',
            // fontFamily: 'Gotham Pro',
            // padding: '10px',
          }}
          >
            {children}
          </div>
        </Provider>
      </ThemeProvider>

    );
  }
}

export default Story;
