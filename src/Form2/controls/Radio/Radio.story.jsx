import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Radio from './Radio';
import FormDebug from '../../FormDebug';
import Switcher from '../../../Switcher/Switcher';
import getOptions from '../../../getOptions';

const RadioFormView = (props) => {
  return (
    <Form>
      {getOptions(props.controls.get('colors')).map(optionControl => (
        <div>
          <div>
            <div>
              <Field {...optionControl} />
            </div>
          </div>
        </div>
      ))}

      <Field {...props.controls.get('colors', 'blue')} />
      <Field {...props.controls.get('colors', 'black')} />
      <Field {...props.controls.get('colors', 'green')} />
      <FormDebug {...props} />
    </Form>
  );
};

const RadioForm = createForm({
  view: RadioFormView,
  controls: {
    // confirm: {
    //   component: Bool,
    //   view: Checkbox,
    //   title: 'Privacy policy',
    // },
    // notification: {
    //   component: Bool,
    //   view: Switcher,
    //   title: 'Enable notifications',
    // },
    // cpm: {
    //   component: Bool,
    //   view: Checkblock,
    //   title: 'Is CPM offer',
    // },
    // colors: {
    //   component: Group,
    //   view: Checkbox,
    //   multi: true,
    //   options: [
    //     {
    //       value: '#ff0000',
    //       title: 'Red',
    //     },
    //     {
    //       value: '#00ff00',
    //       title: 'Green',
    //     },
    //     {
    //       value: '#0000ff',
    //       title: 'Blue',
    //     },
    //   ],
    // },
    // adtypes: {
    //   component: Group,
    //   multi: true,
    //   view: Checkblock,
    //   options: ['preroll', 'postroll', 'midroll'],
    // },
    // adtype: {
    //   component: Group,
    //   view: Radio,
    //   options: ['preroll', 'postroll', 'midroll'],
    // },

    blue: {
      component: Radio,
      key: 'color',
      value: 'blue',
      title: 'first value',
    },
    black: {
      component: Radio,
      key: 'color',
      value: 'black',
      title: 'second value',
    },
    green: {
      component: Radio,
      key: 'color',
      value: 'green',
      title: 'third value',
    },
    color2: {
      component: Radio,
      title: 'Цвета',
      options: [
        {
          value: 'blue',
          title: 'first value',
        },
        {
          value: 'black',
          title: 'second value',
        },
        {
          value: 'green',
          title: 'third value',
        },
      ],
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Radio ', () => {
      return (
        <Story>
          <RadioForm />
        </Story>
      );
    });
