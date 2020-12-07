import React from 'react';
import { Form, Field } from 'formik';
import CheckBlank from 'react-icons2/mdi/checkbox-blank-outline';
import CheckMarked from 'react-icons2/mdi/checkbox-marked';
import RadioBlank from 'react-icons2/mdi/checkbox-blank-circle-outline';
import RadioSelected from 'react-icons2/mdi/checkbox-marked-circle';
import range from 'lodash/range';
import keys from 'lodash/keys';

import Modal, { Title, Content } from '@lskjs/modal';
import Story from '@lskjs/dev/Story/UappStory';
import Performance from '@lskjs/dev/Performance';
import Flag from '@lskjs/flag';
import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Select from './Select';
import countriesList from './countriesList';

const SelectFormView = ({ control, ...props }) => (
  <Form>
    <h1>Обычные селекты</h1>
    <Field {...control('select')} />
    <Field {...control('selectSort')} />
    <Field {...control('select2')} />
    <Field {...control('select3')} />
    <Field {...control('select4')} />
    <Field {...control('select5')} />
    <Field {...control('radio')} />
    <Field {...control('info.initialValue')} />
    <Performance name="countries">
      <Field {...control('countries')} />
    </Performance>
    <Performance name="countries2">
      <Field {...control('countries')} />
    </Performance>
    <Performance name="countries3">
      <Field {...control('countries')} />
    </Performance>
    <Performance name="countries4">
      <Field {...control('countries')} />
    </Performance>
    <Performance name="countries5">
      <Field {...control('countries')} />
    </Performance>
    <hr />
    <h1>Мультиселекты</h1>
    <Field {...control('multiselect')} />
    <Field {...control('multiselect2')} />
    <Field {...control('multiselect3')} />
    <Field {...control('checkboxes')} />
    <hr />
    <h1>Асинхронные селекты</h1>
    <Field {...control('asyncSelect')} />
    <Field {...control('asyncSelect')} />
    <Field {...control('asyncSelect2')} />
    <Field {...control('asyncMultiSelect')} />
    <Field {...control('asyncMultiSelect2')} />
    <hr />
    <h1>Кастомный дизайн</h1>
    <Field {...control('games')} />
    <Field {...control('games2')} />
    <Field {...control('flag')} />
    <Field {...control('countries')} />
    <Field {...control('userSelect')} />
    <hr />
    <h1>initialValue - баг</h1>
    <Field {...control('info.bug1')} />
    <hr />
    <hr />
    <select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </Form>
);

const SelectForm = createForm({
  view: SelectFormView,
  controls: {
    selectSort: {
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
    },
    select: {
      title: 'The Select',
      placeholder: 'test',
      component: Select,
      options: range(1, 11).map((id) => ({
        value: id,
        title: `The ${id}`,
      })),
    },
    select2: {
      title: 'The Select2: without title',
      component: Select,
      options: range(1, 11).map((id) => ({
        value: id,
      })),
    },
    select3: {
      title: 'The Select3: options as stings',
      component: Select,
      options: ['one', 'two'],
    },
    select4: {
      title: 'The Select4',
      component: Select,
      options: ['one', 'two'],
    },
    select5: {
      title: 'select5 with multisearch',
      component: Select,
      multiSearch: true,
      options: [
        {
          title: 'Русский',
          ru: 'Русский',
          en: 'Russian',
          value: 'ru',
        },
        {
          title: 'Албанский',
          ru: 'Албанский',
          en: 'Albanian',
          value: 'al',
        },
        {
          title: 'Английский',
          ru: 'Английский',
          en: 'English',
          value: 'en',
        },
        {
          title: 'Казахский',
          ru: 'Казахский',
          en: 'Kazahstan',
          value: 'kz',
        },
      ],
    },
    // ///
    multiselect: {
      title: 'multiselect: isMulti',
      component: Select,
      isMulti: true,
      options: range(1, 11).map((id) => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
      hideSelectedOptions: false,
      blurInputOnSelect: false,
    },
    multiselect2: {
      title: 'multiselect2: isMulti & hideSelectedOptions',
      component: Select,
      isMulti: true,
      hideSelectedOptions: false,
      options: range(1, 11).map((id) => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
    },
    multiselect3: {
      title: 'multiselect3: isMulti & collapsed',
      component: Select,
      isMulti: true,
      collapsed: true,
      options: range(1, 11).map((id) => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
      hideSelectedOptions: false,
      blurInputOnSelect: false,
    },
    checkboxes: {
      title: 'checkboxes: isMulti & hideSelectedOptions & collapsed & customView',
      component: Select,
      isMulti: true,
      collapsed: true,
      hideSelectedOptions: false,
      options: range(1, 11).map((id) => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
      optionProps: {
        icon: <CheckBlank />,
        iconActive: <CheckMarked />,
        iconColor: '#1890ff',
      },
    },
    radio: {
      title: 'Radio',
      component: Select,
      options: range(1, 11).map((id) => ({
        value: id,
        id,
        title: `User ${id}`,
      })),
      optionProps: {
        icon: <RadioBlank />,
        iconActive: <RadioSelected />,
        iconColor: '#1890ff',
      },
    },
    userSelect: {
      title: 'The userSelect',
      component: Select,
      options: range(1, 11).map((id) => ({
        value: id,
        id,
        image: `https://picsum.photos/40/40/?image=${id}`,
        title: `User ${id}`,
      })),
    },
    games: {
      title: 'Games',
      component: Select,
      isMulti: true,
      hideSelectedOptions: false,
      blurInputOnSelect: false,
      collapsed: true,
      options: range(1, 11).map((id) => ({
        value: id,
        id,
        image: `https://picsum.photos/40/40/?image=1${id}`,
        title: `Game ${id}`,
      })),
      optionProps: {
        icon: <CheckBlank />,
        iconActive: <CheckMarked />,
        iconColor: '#1890ff',
      },
    },
    games2: {
      title: 'Games2: hideSelectedOptions',
      component: Select,
      isMulti: true,
      hideSelectedOptions: false,
      options: range(1, 11).map((id) => ({
        value: id,
        id,
        image: `https://picsum.photos/40/40/?image=1${id}`,
        title: `Game ${id}`,
      })),
      optionProps: {
        icon: <CheckBlank />,
        iconActive: <CheckMarked />,
        iconColor: '#1890ff',
      },
    },
    flag: {
      title: 'Flag',
      component: Select,
      options: [
        {
          title: 'Russia',
          value: 'one',
          icon: <Flag country="ru" />,
        },
        {
          title: 'Britain',
          value: 'two',
          icon: <Flag country="gb" />,
        },
      ],
    },
    countries: {
      title: 'Countries',
      component: Select,
      options: keys(countriesList).map((value) => {
        return {
          title: value,
          value,
          icon: <Flag country={value} />,
        };
      }),
    },
    // /////
    asyncSelect: {
      title: 'The asyncSelect',
      component: Select,
      async: true,
      loadOption: async (value) => ({
        value,
        id: value,
        image: `https://picsum.photos/40/40/?image=${value}`,
        title: `User ${value}`,
      }),
      loadOptions: async (searchValue = '') => {
        const start = searchValue.length;
        return new Promise((resolve) => {
          setTimeout(
            () =>
              resolve(
                range(start, start + 10).map((value) => ({
                  value,
                  id: value,
                  image: `https://picsum.photos/40/40/?image=${value}`,
                  title: `User ${value}`,
                })),
              ),
            50,
          );
        });
      },
    },
    asyncMultiSelect: {
      title: 'The asyncMultiSelect',
      component: Select,
      async: true,
      isMulti: true,
      loadOption: async (values) => {
        if (Array.isArray(values)) {
          return values.map((value) => {
            return {
              value,
              id: value,
              image: `https://picsum.photos/40/40/?image=${value}`,
              label: `User ${value}`,
            };
          });
        }
        return [];
      },
      loadOptions: async (searchValue = '') => {
        const start = searchValue.length;
        return new Promise((resolve) => {
          setTimeout(
            () =>
              resolve(
                range(start, start + 10).map((value) => ({
                  value,
                  id: value,
                  image: `https://picsum.photos/40/40/?image=${value}`,
                  title: `User ${value}`,
                })),
              ),
            50,
          );
        });
      },
    },
    asyncMultiSelect2: {
      title: 'The asyncMultiSelect2 && !blurInputOnSelect',
      component: Select,
      async: true,
      isMulti: true,
      blurInputOnSelect: false,
      loadOption: async (values) => {
        if (Array.isArray(values)) {
          return values.map((value) => {
            return {
              value,
              id: value,
              image: `https://picsum.photos/40/40/?image=${value}`,
              label: `User ${value}`,
            };
          });
        }
        return [];
      },
      loadOptions: async (searchValue = '') => {
        const start = searchValue.length;
        return new Promise((resolve) => {
          setTimeout(
            () =>
              resolve(
                range(start, start + 10).map((value) => ({
                  value,
                  id: value,
                  image: `https://picsum.photos/40/40/?image=${value}`,
                  title: `User ${value}`,
                })),
              ),
            50,
          );
        });
      },
    },
    asyncSelect2: {
      title: 'The asyncSelect2',
      component: Select,
      async: true,
      loadOption: async (value) => ({
        value,
        id: value,
        image: `https://picsum.photos/40/40/?image=${value}`,
        title: `User ${value}`,
      }),
      loadOptions: async (searchValue = '') => {
        const start = searchValue.length;
        return new Promise((resolve) => {
          setTimeout(
            () =>
              resolve(
                range(start, start + 10).map((value) => ({
                  value,
                  id: value,
                  image: `https://picsum.photos/40/40/?image=${value}`,
                  title: `User ${value}`,
                })),
              ),
            2000,
          );
        });
      },
    },
    'info.bug1': {
      title: 'offerEdit.type.title',
      component: Select,
      initialValue: 'fixed',
      options: [
        {
          value: 'fixed',
          label: 'offerEdit.type.fixed',
          info: 'offerEdit.type.fixedInfo',
          help: 'offerEdit.type.fixedHelp',
        },
        {
          value: 'cpm',
          label: 'offerEdit.type.cpm',
          info: 'offerEdit.type.cpmInfo',
          help: 'offerEdit.type.cpmHelp',
        },
      ],
    },
    'info.initialValue': {
      component: Select,
      title: 'offerEdit.visibility',
      placeholder: 'offer.placeholders.title',
      format: Boolean,
      initialValue: true,
      options: [
        {
          // icon: <AccountMulti />,
          title: 'offer.type.public',
          description: 'offer.type.publicInfo',
          value: true,
        },
        {
          // icon: <Account />,
          title: 'offer.type.private',
          description: 'offer.type.privateInfo',
          value: false,
        },
      ],
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module)
    .add('Select ', () => {
      return (
        <Story devtools perf>
          <SelectForm
            initialValues={{
              select4: 'two',
              asyncSelect2: 99,
              asyncSelect: 1,
              asyncMultiSelect: [4],
            }}
          />
        </Story>
      );
    })
    .add('Modal select', () => {
      return (
        <Story devtools perf>
          <Modal trigger={<div>asd</div>}>
            <Title>asd</Title>
            <Content>
              <SelectForm />
            </Content>
          </Modal>
        </Story>
      );
    });
