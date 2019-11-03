import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormDebug from '../../FormDebug';

import Input from '../../controls/Input';
import ArrayOf from '../../controls/ArrayOf';
import Calendar from '../../controls/Calendar';
import CheckBlock from '../../controls/CheckBlock';
import CheckBlockList from '../../controls/CheckBlockList';
import Date from '../../controls/Date';
import Files from '../../controls/Files';
import FilesNative from '../../controls/FilesNative';
import Geo from '../../controls/Geo';
import GroupOf from '../../controls/GroupOf';
import Checkbox from '../../controls/Checkbox';
import Radio from '../../controls/Radio';
// import ImageNative from '../../controls/ImageNative';
import PercentSlider from '../../controls/PercentSlider';
import PhoneInput from '../../controls/PhoneInput';
import RadioButtonGroup from '../../controls/RadioButtonGroup';
import RadioCards from '../../controls/RadioCards';
import Select from '../../controls/Select';
import Switcher from '../../controls/Switcher';
import Tags from '../../controls/Tags';
import Textarea from '../../controls/Textarea';
import Image from '../../controls/Image';

const ValidationView = (props) => {
  const { control } = props;
  return (
    <Form>
      {/* <Field {...control('inputArray')} /> */}
      <Field {...control('calendar')} />
      <Field {...control('input')} />
      {/* <Field {...control('CheckBlock')} /> */}
      {/* <Field {...control('checkbox')} /> */}
      <Field {...control('checkblocklist')} />
      <Field {...control('date')} />
      <Field {...control('files')} />
      <Field {...control('filesnative')} />
      <Field {...control('geo')} />
      <Field {...control('color')} />
      <Field {...control('image')} />
      <Field {...control('slider')} />
      <Field {...control('phone')} />
      <Field {...control('radio')} />
      {/* <Field {...control('RadioButtonGroup')} /> */}
      <Field {...control('radioCards')} />
      {/* <Field {...control('range')} /> */}
      <Field {...control('selectSort')} />
      <Field {...control('switcher')} />
      <Field {...control('tags')} />
      <Field {...control('textarea')} />
      <FormDebug {...props} />
    </Form>
  );
};


const Validation = createForm({
  withFormik,
  view: ValidationView,
  validateOnBlur: true,
  controls: {
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
      required: true,
    },
    calendar: {
      title: 'Calendar string date 2019-01-01',
      component: Calendar,
      required: true,
    },
    input: {
      title: 'Required',
      component: Input,
      required: true,
    },
    CheckBlock: {
      // title: 'checkBlock',
      component: CheckBlock,
      view: 'radio',
      label: 'test',
      info: 'this is info',
      // children: 'asd',
      block: true,
    },
    checkbox: {
      // title: 'checkBlock',
      component: CheckBlock,
      view: 'checkbox',
      label: 'test',
      info: 'this is info',
      // children: 'asd',
      block: true,
    },
    checkblocklist: {
      component: CheckBlockList,
      options: [
        {
          value: 'first',
          title: 'Value-1',
        },
        {
          value: 'second',
          title: 'Value-2',
        },
        {
          value: 'third',
          title: 'Value-3',
        },
        {
          value: 'four',
          title: 'Value-4',
        },
      ],
      cols: {
        xs: 6,
      },
      required: true,
    },
    checkblock: {
      component: Checkbox,
      title: 'first value',
      label: '1',
      help: 'help 1',
      tooltip: 'tooltip 1',
      required: true,
    },
    date: {
      title: 'Date',
      component: Date,
      ranged: true,
      futureOnly: true,
      required: true,
    },
    files: {
      title: 'Files1: isMulti',
      component: Files,
      isMulti: true,
      required: true,
    },
    filesnative: {
      title: 'Files1: isMulti',
      component: FilesNative,
      isMulti: true,
      required: true,
    },
    geo: {
      title: 'Координаты',
      component: Geo,
      defaultZoom: 9,
      apiKey: 'AIzaSyB2h6WjtzHRJvzi51vdikCpHlG3K6n3U24',
      required: true,
    },
    color: {
      component: GroupOf,
      itemComponent: Radio,
      title: 'Выбор одного элемента',
      required: true,
      options: ['One', 'Two', 'Three'],
    },
    image: {
      title: 'Image',
      component: Image,
      required: true,
    },
    slider: {
      title: 'PercentSlider',
      component: PercentSlider,
      required: true,
    },
    phone: {
      title: 'default country',
      component: PhoneInput,
      required: true,
    },
    radio: {
      component: Radio,
      title: 'first value',
      required: true,
    },
    RadioButtonGroup: {
      required: true,
      component: RadioButtonGroup,
      active: 'byDate',
      options: [
        {
          value: 'byDate',
          title: 'По дате',
        },
        {
          value: 'month3',
          title: '3 месяца',
        },
        {
          value: 'month6',
          title: '6 месяцев',
        },
      ],
    },
    radioCards: {
      required: true,
      title: 'radioCards',
      component: RadioCards,
      options: [
        {
          value: 'value-1',
          title: 'title1',
          description: 'desc1',
          // icon: <Icon />,
        },
        {
          value: 'value-2',
          title: 'title2',
          description: 'desc2',
        },
      ],
    },
    range: {
      required: true,
      title: 'range',
      component: Range,
      min: 0,
      max: 20,
    },
    selectSort: {
      required: true,
      title: 'Sorted Select',
      placeholder: 'test',
      component: Select,
      sortable: true,
      options: [
        {
          value: 'two',
          title: 'Два',
        },
        {
          value: 'one',
          title: 'Один',
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
      // menuIsOpen: true,
    },
    switcher: {
      required: true,
      title: '1. switcher',
      component: Switcher,
      label: 'This is switcher',
    },
    tags: {
      required: true,
      title: 'Tags',
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
    textarea: {
      title: 'textarea',
      component: Textarea,
      type: 'textarea',
      minRows: 5,
      placeholder: 'TextArea',
      required: true,
    },
  },
});


export default ({ storiesOf }) => (
  storiesOf('form/validator', module)
    .add('validator onBlur', () => (
      <Story>
        <Validation
          onSubmit={(values) => {
            console.log({ values });
          }}
        />
      </Story>
    ))
);
