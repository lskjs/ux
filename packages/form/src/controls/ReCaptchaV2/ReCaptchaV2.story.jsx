import React from 'react';
import { Form, Field } from 'formik';
import PropTypes from 'prop-types';
import Story from '@lskjs/dev/Story/UappStory';
import createForm from '../../createForm';
import ReCaptchaV2 from './ReCaptchaV2';
import FormDebug from '../../FormDebug';

const ReCaptchaV2FormView = (props) => {
  const { control } = props;
  return (
    <Form>
      <Field {...control('reCapcha')} />
      <FormDebug {...props} />
    </Form>
  );
};

ReCaptchaV2FormView.propTypes = {
  control: PropTypes.objectOf(Object),
};

ReCaptchaV2FormView.defaultProps = {
  control: null,
};

const ReCaptchaV2Form = createForm({
  view: ReCaptchaV2FormView,
  controls: {
    reCapcha: {
      title: 'reCapcha',
      component: ReCaptchaV2,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('ReCaptchaV2Form ', () => {
    return (
      <Story>
        <ReCaptchaV2Form />
      </Story>
    );
  });
