import React from 'react';
import { Provider } from 'mobx-react';
import Button from '../Button';
import UrlButton from './UrlButton';

// import '../../../Root/Storybook.g.css';

const api = {
  fetch: (...args) => console.log('api.get', ...args),
};
const uapp = {
  api,
  onError: console.error,
  provide: () => ({
    uapp,
    api,
  }),
};


export default ({ storiesOf }) => {
  storiesOf('UrlButton', module)
    .add('Default', () => (
      <Provider {...uapp.provide()}>
        <UrlButton
          componentClass={Button}
          paint="primary"
          url="/api/v1/auth/silent?id=594bd196e0168d51ab5e60d7"
        >
          URL Button
        </UrlButton>
      </Provider>
    ));
};

