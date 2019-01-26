import React from 'react';
import { Form, FastField } from 'formik';

import Story from '../../../Story';
import { Table, Col, Row } from '../../../Table';

import createForm from '../../createForm';
import FormGroup from '../../FormGroup';

import Input from '../../controls/Input';
import Select from '../../controls/Select';
import Checkbox from '../../controls/Checkbox';
import Tags from '../../controls/Tags';

const FormExample2View = (props) => {
  return (
    <Form>
      <Table columns={['1fr', '1fr', '1fr', '1fr']}>
        <Row>
          <Col index={0}>
            <FastField {...props.controls.input} />
          </Col>
          <Col index={1}>
            <FastField {...props.controls.select} />
          </Col>
          <Col index={2}>
            <FastField {...props.controls.checkbox} />
          </Col>
          <Col index={3}>
            <FastField {...props.controls.tags} />
          </Col>
        </Row>
      </Table>
    </Form>
  );
};

export const FormExample2 = createForm({
  view: FormExample2View,
  FormGroup,
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input',
    },
    select: {
      title: 'The Select',
      component: Select,
      options: [
        {
          value: 'corporation',
          title: 'first',
        },
        {
          value: 'individual',
          title: 'second',
        },
      ],
      placeholder: 'placeholder',
    },
    checkbox: {
      title: 'The Checkbox',
      component: Checkbox,
      label: 'Checkbox label',
      placeholder: 'Checkbox placeholder',
    },
    tags: {
      title: 'tags',
      component: Tags,
      triggerTitle: 'Выбрать теги',
      flat: true,
      options: [
        {
          value: 'one',
          title: 'Один',
        },
        {
          value: 'two',
          title: 'Два',
        },
        {
          value: 'three',
          title: 'Три',
        },
        {
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/examples', module)
    .add('FormExample2', () => {
      return (
        <Story>
          <FormExample2 />
        </Story>
      );
    });
