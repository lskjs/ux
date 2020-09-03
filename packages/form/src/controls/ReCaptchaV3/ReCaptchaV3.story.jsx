import React from 'react';
import { Form, Field } from 'formik';
import PropTypes from 'prop-types';
import Story from '@lskjs/dev/Story/UappStory';
import createForm from '../../createForm';
import ReCaptchaV3 from './ReCaptchaV3';
import FormDebug from '../../FormDebug';

const ReCaptchaV3FormView = (props) => {
  const { control } = props;
  return (
    <Form>
      <Field {...control('reCapcha')} />
      <FormDebug {...props} />
    </Form>
  );
};

ReCaptchaV3FormView.propTypes = {
  control: PropTypes.objectOf(Object),
};

ReCaptchaV3FormView.defaultProps = {
  control: null,
};

const ReCaptchaV3Form = createForm({
  view: ReCaptchaV3FormView,
  controls: {
    reCapcha: {
      title: 'reCapcha',
      component: ReCaptchaV3,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('ReCaptchaV3Form ', () => {
    return (
      <Story>
        <ReCaptchaV3Form />
      </Story>
    );
  });
