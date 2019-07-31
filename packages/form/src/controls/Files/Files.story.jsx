import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Files from './Files';
import FormDebug from '../../FormDebug';
import Body from '../Image/DefaultBody';

const FilesFormView = props => (
  <Form>
    <Field {...props.control('files')} />
    <Field {...props.control('files2')} />
    <Field {...props.control('files3')} />
    <Field {...props.control('files4')} />
    <Field {...props.control('files5')} />
    <FormDebug {...props} />
  </Form>
);

const FilesForm = createForm({
  view: FilesFormView,
  controls: {
    files: {
      title: 'Files1: isMulti',
      component: Files,
      isMulti: true,
    },
    files2: {
      title: 'Files2: isMulti, custom body',
      component: Files,
      isMulti: true,
      type: 'image',
      components: {
        Body,
      },
    },
    files3: {
      title: 'Files3',
      component: Files,
      isMulti: true,
    },
    files4: {
      title: 'Files4',
      component: Files,
      isMulti: true,
    },
    files5: {
      title: 'Files5',
      component: Files,
      isMulti: true,
    },
    files6: {
      title: 'Files6',
      component: Files,
      isMulti: true,
    },
  },
});

export default ({ storiesOf }) => storiesOf('form/controls', module)
  .add('Files ', () => (
    <Story>
      <FilesForm
        initialValues={{
          files: [
            'https://pp.userapi.com/c636819/v636819936/346c3/6xIvJ0BI8rs.jpg',
            'https://avatanplus.com/files/resources/mid/56bced54bd17f152d1ff1327.png',
            'https://a.d-cd.net/8dabadas-960.jpg',
            'http://www.setwalls.ru/download.php?file=201306/2560x1440/setwalls.ru-58752.jpg',
            'http://krasa.tk/wp-content/uploads/2015/11/face.jpg',
            'https://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg',
            'https://hz.ru/asd.png',
            '//cdn.mgbeta.ru/frz/abpage-favicon.png',
            '//cdn.mgbeta.ru/abp/_abpage.css',
          ],
          files3: [
            'https://pp.userapi.com/c636819/v636819936/346c3/6xIvJ0BI8rs.jpg',
            'https://avatanplus.com/files/resources/mid/56bced54bd17f152d1ff1327.png',
            'https://a.d-cd.net/8dabadas-960.jpg',
            'http://www.setwalls.ru/download.php?file=201306/2560x1440/setwalls.ru-58752.jpg',
            'http://krasa.tk/wp-content/uploads/2015/11/face.jpg',
            'https://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg',
          ],
          files4: [],
          files5: null,
          files6: [
            'https://pp.userapi.com/c636819/v636819936/346c3/6xIvJ0BI8rs.jpg',
            'https://avatanplus.com/files/resources/mid/56bced54bd17f152d1ff1327.png',
            'https://a.d-cd.net/8dabadas-960.jpg',
            'http://www.setwalls.ru/download.php?file=201306/2560x1440/setwalls.ru-58752.jpg',
            'http://krasa.tk/wp-content/uploads/2015/11/face.jpg',
            'https://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg',
          ],
        }}
      />
    </Story>
  ));
