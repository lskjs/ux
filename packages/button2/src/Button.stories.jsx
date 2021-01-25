import React, { useState } from 'react';
import { css } from '@emotion/react';

import { ButtonProvider } from './ButtonContext';
import { addColorSchema } from './theme';
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
    // variant: {
    //   control: 'select',
    // },
    size: { control: 'select' },
    type: { control: 'select' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'primary',
  children: 'Кнопка',
};

export const CustomSchema = (args) => {
  const [variant, setVariant] = useState('primary');
  return (
    <div>
      <button
       onClick={() => {
        addColorSchema({
          colors: {
            text: 'red',
            normal: 'grey',
            hover: 'black',
          },
          style: (props) => css`
            color: ${props.theme['ux/Button'].colors.custom.text};
            background-color: ${props.theme['ux/Button'].colors.custom.normal};
            &:hover {
              background-color: ${props.theme['ux/Button'].colors.custom.hover};
            }
          `,
        }, 'custom');
        setVariant('custom');
       }}
      >
         Add custom schema
       </button>
      <br />
      <Button {...args} variant={variant}>Кастомная тема</Button>
    </div> 
   );
};