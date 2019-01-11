import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'mobx-react';
import theme from './utils/theme';

// import './styles/lib/cssreset.g.css';
// import './styles/lib/antdbase.g.css';
import './styles/lib/antd.g.css';
import './styles/lib/bootstrap.g.css';
import './Form2/controls/Select/Select.g.css';

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
