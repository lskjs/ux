import React from 'react';

import { ButtonProvider } from './ButtonContext';
import Button from './Button';

export default {
  title: 'UX/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ButtonProvider>
        <Story />
      </ButtonProvider>
    ),
  ],
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
    type: { control: 'select' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Кнопка',
};
