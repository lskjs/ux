import React from 'react';
import { Form, Field } from 'formik';
import Select from '@lskjs/form/controls/Select';
// import { ValueContainer as DefaultValueContainer } from 'react-select/lib/components/containers';
import range from 'lodash/range';

import createForm from '@lskjs/form/createForm';
// import FormDebug from '@lskjs/form/FormDebug';
// import createFormWithI18 from '../../createFormWithI18';

const SelectFormView = (props) => (
  <Form>
    <h1>Обычный селект</h1>
    <Field {...props.control('select')} />
    <h1>Асинхронные селекты</h1>
    <Field {...props.control('asyncSelect')} />
    <Field {...props.control('asyncSelect2')} />
    <Field {...props.control('asyncMultiSelect')} />
    {/* <FormDebug {...props} /> */}
  </Form>
);

// const ValueContainer = ({ children, selectProps, ...props }) => {
//   const chl = [children[0][0] || children[0], children[1]];
//   return (
//     <DefaultValueContainer {...props}>{chl}</DefaultValueContainer>
//   );
// };

export default createForm({
  view: SelectFormView,
  controls: {
    select: {
      title: 'The Select',
      placeholder: 'test',
      component: Select,
      options: range(1, 11).map(id => ({
        value: id,
        title: `The ${id}`,
      })),
      // menuIsOpen: true,
    },
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
  },
});
