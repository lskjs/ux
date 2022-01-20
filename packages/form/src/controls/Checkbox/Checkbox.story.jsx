import Story from '@lskjs/dev/Story/UappStory';
import T from '@lskjs/t';
import { Field, Form } from 'formik';
import React from 'react';
import Desktop from 'react-icons2/mdi/desktop-mac';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Checkbox from './Checkbox';

const CheckboxFormView = (props) => (
  <Form>
    <Checkbox label="test" />
    <Checkbox checked />
    <Checkbox checked={false} />
    <Checkbox value />
    <Checkbox value={false} />
    <Checkbox onChange={(value) => console.log({ value })} />
    <hr />
    <Field {...props.control('blue')} />
    <Field {...props.control('black')} />
    <Field {...props.control('black')} />
    <hr />
    <Field {...props.control('screen')} />
    <FormDebug {...props} />
  </Form>
);

const CheckboxForm = createForm({
  view: CheckboxFormView,
  controls: {
    blue: {
      component: Checkbox,
      title: 'first value',
      label: '1',
      help: 'help 1',
      tooltip: 'tooltip 1',
    },
    black: {
      component: Checkbox,
      title: 'second value',
      label: '2',
      help: 'help 2',
      tooltip: 'tooltip 2',
    },
    screen: {
      component: Checkbox,
      title: 'videoTypes.screencast',
      label: (
        <span>
          <Desktop /> <T name="videoTypes.screencast" />
        </span>
      ),
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Checkbox ', () => (
    <Story>
      <CheckboxForm />
    </Story>
  ));
