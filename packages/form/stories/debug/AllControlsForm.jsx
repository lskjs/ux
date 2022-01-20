import { Field, Form } from 'formik';
import React from 'react';
import Icon from 'react-icons2/mdi/magnify';

import ArrayOf from '../../src/controls/ArrayOf';
import Calendar from '../../src/controls/Calendar';
import CheckBlock from '../../src/controls/CheckBlock';
import Checkbox from '../../src/controls/Checkbox';
import Files from '../../src/controls/Files';
import Geo from '../../src/controls/Geo';
// import Date from '../../src/controls/Date';
import GroupOf from '../../src/controls/GroupOf';
import Image from '../../src/controls/Image';
import Input from '../../src/controls/Input';
import PercentSlider from '../../src/controls/PercentSlider';
import PhoneInput from '../../src/controls/PhoneInput';
import Radio from '../../src/controls/Radio';
import RadioCards from '../../src/controls/RadioCards';
import Range from '../../src/controls/Range';
import Select from '../../src/controls/Select';
import Switcher from '../../src/controls/Switcher';
import Tags from '../../src/controls/Tags';
import Textarea from '../../src/controls/Textarea';
import createForm from '../../src/createForm';
import FormDebug from '../../src/FormDebug';

export const View = (props) => (
  <Form>
    <Field {...props.control('input')} />
    <Field {...props.control('select')} />
    <Field {...props.control('tags')} />
    <Field {...props.control('slider')} />
    <Field {...props.control('phone')} />
    <Field {...props.control('files')} />
    <Field {...props.control('inputArray')} />
    <Field {...props.control('calendar')} />
    <Field {...props.control('radio')} />
    <Field {...props.control('checkbox')} />
    <Field {...props.control('blue')} />
    {/* <Field {...props.control('date')} /> */}
    <Field {...props.control('geo')} />
    <Field {...props.control('color')} />
    <Field {...props.control('image')} />
    <Field {...props.control('blueCheckbox')} />
    <Field {...props.control('range')} />
    <Field {...props.control('switcher')} />
    <Field {...props.control('textarea')} />
    <Field {...props.control('radioCards')} />
    <FormDebug {...props} />
  </Form>
);

export const controls = {
  input: {
    title: 'Input',
    component: Input,
  },
  select: {
    title: 'Select',
    component: Select,
    options: ['a', 'b', 'c'],
  },
  tags: {
    title: 'Tags',
    component: Tags,
    flat: true,
    options: ['a', 'b', 'c'],
  },
  slider: {
    title: 'PercentSlider',
    component: PercentSlider,
  },
  phone: {
    title: 'PhoneInput',
    component: PhoneInput,
  },
  files: {
    title: 'Files',
    component: Files,
  },
  calendar: {
    title: 'Calendar',
    component: Calendar,
    futureOnly: true,
    highlightedDates: [
      new Date('2019-02-15'),
      new Date('2019-02-18'),
      new Date('2019-02-17'),
      '2019-02-02',
      '2019-03-13',
      '2019-02-04',
      '2019-02-13',
      Date.now(),
    ],
  },
  radio: {
    component: CheckBlock,
    view: 'radio',
    label: 'test',
    info: 'this is info',
    block: true,
  },
  radioCards: {
    title: 'radioCards',
    component: RadioCards,
    options: [
      {
        value: 'value-1',
        title: 'title1',
        description: 'desc1',
        icon: <Icon />,
      },
      {
        value: 'value-2',
        title: 'title2',
        description: 'desc2',
      },
    ],
  },
  checkbox: {
    component: CheckBlock,
    view: 'checkbox',
    label: 'test',
    info: 'this is info',
    block: true,
  },
  blue: {
    component: Checkbox,
    title: 'first value',
    label: '1',
  },
  // date: {
  //   title: 'Date',
  //   component: Date,
  // },
  geo: {
    title: 'Координаты',
    component: Geo,
    defaultZoom: 9,
    apiKey: 'YOUR KEY HERE',
  },
  color: {
    component: GroupOf,
    itemComponent: Checkbox,
    isMulti: true,
    title: 'Выбор цветов',
    required: true,
    options: [
      {
        value: '#ff0000',
        title: 'Red',
        label: 'Red',
      },
      {
        value: '#00ff00',
        title: 'Green',
        label: 'Green',
      },
      {
        value: '#0000ff',
        title: 'Blue',
        label: 'Blue',
      },
    ],
  },
  image: {
    title: 'Image',
    component: Image,
  },
  blueCheckbox: {
    component: Radio,
    title: 'first value',
  },
  range: {
    title: 'range',
    component: Range,
    min: 0,
    max: 20,
  },
  switcher: {
    title: '1. switcher',
    component: Switcher,
    label: 'This is switcher',
  },
  inputArray: {
    title: 'ArrayOf',
    component: ArrayOf,
    itemComponent: Input,
    itemProps: {
      type: 'number',
    },
    itemInitialValue: '',
    showRemoveButton: true,
    autoAddLastItem: true,
    maxCount: 5,
    minCount: 2,
  },
  textarea: {
    title: 'textarea',
    component: Textarea,
    type: 'textarea',
    minRows: 5,
    placeholder: 'TextArea',
    required: true,
  },
};

export default createForm({
  view: View,
  controls,
});
