import React from 'react';
import DevStory from '@lskjs/dev/Story';
import { Provider } from 'mobx-react';
import { T, withT } from '.';

const Story = ({ children }) => (
  <DevStory>
    <Provider
      i18={{
        t: a => a,
      }}
    >
      {children}
    </Provider>
  </DevStory>
);

export default ({ storiesOf }) =>
  storiesOf('ui/T', module)
    .add('<T>', () => (
      <Story>
        <T name="test.key" />
      </Story>
    ))
    .add('withT', () => {
      const Button = ({ i18 }) => <button type="button">{i18.t('buttons.submit')}</button>;
      const ButtonWithT = withT(Button);
      return (
        <Story>
          <ButtonWithT />
        </Story>
      );
    });
