import React from 'react';
import AntForm from 'antd/lib/form';
import Button from '@lskjs/button';
import isEmpty from 'lodash/isEmpty';
import { Form, Field, FastField } from 'formik';
import { Row, Col } from '@lskjs/grid';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import GroupOf from './GroupOf';
import Radio from '../Radio';
import Checkbox from '../Checkbox';
import Checkblock from '../CheckBlock';
import FormDebug from '../../FormDebug';
import Input from '../Input';
import T from '@lskjs/t';
import Account from 'react-icons2/mdi/account-box-outline';
import Desktop from 'react-icons2/mdi/desktop-mac';
import Camera from 'react-icons2/mdi/camcorder';
import { CheckBlockList, ColumnCheckBlockList } from '../CheckBlock/ExtendedCheckblock/ExtendedCheckblock.styles';
import { LabelWrapper, checkBlockListStyle } from './GroupOf.styles';


const RadioFormView = (props) => {
  const checkBlockListValues = props.values.checkBlockList;
  const checkBlockListField = props.controls.checkBlockList;
  return (
    // const colorsOptions = getOptions(colorsControl);
    <Form>
      <Field {...props.control('color')} />
      <Field {...props.control('adtype')} />
      <Field {...props.control('dealType')} />
      <hr />
      <AntForm.Item
        className={checkBlockListStyle}
        label={(
          <LabelWrapper>
            <div>test</div>
            <Button
              type="button"
              paint="primary"
              view="empty"
              size="small"
              isRipple={false}
              // onClick={() => console.log(props)}
              onClick={() => {
                const values = [];
                if (!checkBlockListValues || isEmpty(checkBlockListValues)) {
                  checkBlockListField.options.forEach((item) => {
                    values.push(item.value);
                  });
                  props.setFieldValue(checkBlockListField.name, values);
                } else {
                  props.setFieldValue(checkBlockListField.name, []);
                }
              }}
            >
              {checkBlockListValues && !isEmpty(checkBlockListValues) ? 'Очистить все' : 'Выделить все'}
            </Button>
          </LabelWrapper>
        )}
      >
        <Field {...props.control('checkBlockList')}
          render2={({ options }) => (
            <CheckBlockList>
              {options.map(({ Component }) => {
                return (
                  <Col xs={6}>
                    <Component />
                  </Col>
                );
              })}
            </CheckBlockList>
          )}
        />
      </AntForm.Item>
      <hr />
      <br />
      <br />
      <Field {...props.control('checkBlockList2')}
        render2={({ options }) => (
          <ColumnCheckBlockList>
            {options.map(({ Component }) => {
              return (
                <Col xs={12}>
                  <Component />
                </Col>
              );
            })}
          </ColumnCheckBlockList>
        )}
      />
      <hr />
      <Field {...props.control('colors')} />
      <Field {...props.control('colors2')} />
      <Field
        {...props.control('colors')}
        render2={({ options }) => (
          <div style={{ border: '1px black solid' }}>
            {options.map(({ Component, option }) => (
              <div style={{ border: `1px ${option.value} dotted` }}><Component /></div>
            ))}
          </div>
        )}
      />
      <hr />
      <Field {...props.control('videoTypes')} itemProps={{ style: { display: 'block' } }} />
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
    color: {
      component: GroupOf,
      itemComponent: Radio,
      title: 'Выбор одного элемента',
      required: true,
      options: ['One', 'Two', 'Three'],
    },
    colors: {
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
    colors2: {
      key: 'colors',
      component: GroupOf,
      itemComponent: Radio,
      isMulti: true,
      title: 'Очень странный одноразовый выборный',
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
    videoTypes: {
      component: GroupOf,
      isMulti: true,
      title: 'Виды съемки',
      required: true,
      // itemComponent: Checkblock,
      itemComponent: Checkbox,
      options: [
        {
          value: 'screen',
          title: 'videoTypes.screencast',
          label: <span><Desktop /> <T name="videoTypes.screencast" /></span>,
        },
        {
          value: 'camera',
          title: 'videoTypes.camera',
          label: <span><Camera /> <T name="videoTypes.camera" /></span>,

        },
        {
          value: 'webcam',
          title: 'videoTypes.webcamera',
          label: <span><Account /> <T name="videoTypes.webcamera" /></span>,
        },
      ],
    },
    dealType: {
      component: GroupOf,
      itemComponent: Checkblock,
      itemProps: {
        view: 'radio',
        block: true,
      },
      options: [{
        value: 'cpm',
        label: 'CPM',
        info: 'this is info',
      }, {
        value: 'fix',
        label: 'Fix price',
        info: 'this is info',
      }],
    },
    checkBlockList: {
      component: GroupOf,
      isMulti: true,
      itemComponent: Checkblock,
      itemProps: {
        view: 'checkbox',
        block: true,
      },
      options: [
        {
          value: 'first',
          title: 'first',
        },
        {
          value: 'second',
          title: 'second',
        },
        {
          value: 'third',
          title: 'third',
        },
        {
          value: 'fourth',
          title: 'fourth',
        },
        {
          value: 'fifth',
          title: 'fifth',
        },
        {
          value: 'sixth',
          title: 'sixth',
        },
      ],
    },
    checkBlockList2: {
      component: GroupOf,
      isMulti: true,
      itemComponent: Checkblock,
      itemProps: {
        view: 'checkbox',
        block: true,
      },
      options: [
        {
          value: 'first',
          title: 'first',
        },
        {
          value: 'second',
          title: 'second',
        },
        {
          value: 'third',
          title: 'third',
        },
        {
          value: 'fourth',
          title: 'fourth',
        },
        {
          value: 'fifth',
          title: 'fifth',
        },
        {
          value: 'sixth',
          title: 'sixth',
        },
      ],
    },
    adtype: {
      component: GroupOf,
      itemComponent: Radio,
      options: [
        {
          value: 'screen',
          title: 'videoTypes.screencast',
          label: <span><Desktop /> <T name="videoTypes.screencast" /></span>,
        },
        {
          value: 'camera',
          title: 'videoTypes.camera',
          label: <span><Camera /> <T name="videoTypes.camera" /></span>,

        },
        {
          value: 'webcam',
          title: 'videoTypes.webcamera',
          label: <span><Account /> <T name="videoTypes.webcamera" /></span>,
        },
      ],
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module)
    .add('GroupOf ', () => {
      return (
        <Story>
          <RadioForm />
        </Story>
      );
    });
