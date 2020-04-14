import React from 'react';
import { Provider } from 'mobx-react';
import Story from '@lskjs/dev/Story';

export const uapp = {
  i18: { t: a => a },
  module: type => ({
    uploadFiles(files) {
      console.log('UPLOAD => ', files);
      return [
        {
          url: 'https://picsum.photos/100/?random',
        },
      ];
    },
  }),
};

export default ({ children, ...props }) => (
  <Story {...props}>
    <Provider uapp={uapp} i18={uapp.i18}>
      {children}
    </Provider>
  </Story>
);
