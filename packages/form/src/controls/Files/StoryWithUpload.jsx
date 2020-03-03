import React from 'react';
import { Provider } from 'mobx-react';
import Story from '@lskjs/dev/Story';

export const uapp = {
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
    <Provider uapp={uapp}>{children}</Provider>
  </Story>
);
