import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import TagsComponent from '../../controls/Tags';
import LightFormGroup from '../../LightFormGroup';

import '../../../UI/molecules/Modal/Modal.g.css';

const TagsView = (props) => {
  const {
    handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.tags} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const Tags = createForm({
  view: TagsView,
  FormGroup: LightFormGroup,
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
