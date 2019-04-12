import React from 'react';
import { Form, Field } from 'formik';
import Icon from 'react-icons2/mdi/magnify';

import createForm from '../../createForm';
import Input from '../../controls/Input';
import Select from '../../controls/Select';
import Tags from '../../controls/Tags';
import PhoneInput from '../../controls/PhoneInput';
import FormDebug from '../../FormDebug';
import PercentSlider from '../../controls/PercentSlider';
import Files from '../../controls/Files';
import ArrayOf from '../../controls/ArrayOf';
import Calendar from '../../controls/Calendar';
import CheckBlock from '../../controls/CheckBlock';
import Checkbox from '../../controls/Checkbox';
import Geo from '../../controls/Geo';
// import Date from '../../controls/Date';
import GroupOf from '../../controls/GroupOf';
import Image from '../../controls/Image';
import Radio from '../../controls/Radio';
import RadioCards from '../../controls/RadioCards';
import Range from '../../controls/Range';
import Switcher from '../../controls/Switcher';
import Textarea from '../../controls/Textarea';

export const View = props => (
  <Form>
    <Field {...props.control('input')} />
    <Field {...props.control('select')} />
    <Field {...props.control('tags')} />
    <Field {...props.control('slider')} />
    <Field {...props.control('phone')} />
    <Field {...props.control('files')} />
    <Field {...props.control('inputArray')} />
    <Field {...props.control('calendar')} />
    <Field {...props.controls.get('radio')} />
    <Field {...props.controls.get('checkbox')} />
    <Field {...props.controls.get('blue')} />
    {/* <Field {...props.control('date')} /> */}
    <Field {...props.control('geo')} />
    <Field {...props.controls.get('color')} />
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
    apiKey: 'AIzaSyB2h6WjtzHRJvzi51vdikCpHlG3K6n3U24',
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
