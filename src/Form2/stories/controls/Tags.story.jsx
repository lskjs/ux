import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import TagsComponent from '../../controls/Tags';
import FormGroup from '../../FormGroup';
import DEV from '../../../DEV';

import '../../../UI/molecules/Modal/Modal.g.css';

const TagsView = (props) => {
  const {
    handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.tags} />
      <DEV json={values} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const Tags = createForm({
  view: TagsView,
  FormGroup,
  controls: {
    tags: {
      title: 'Tags',
      component: TagsComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Tags ', () => {
      return (
        <Story>
          <Tags />
        </Story>
      );
    });
