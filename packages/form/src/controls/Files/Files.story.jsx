/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Form, Field } from 'formik';
// import Story from '@lskjs/dev/Story/UappStory';
import StoryWithUpload from './StoryWithUpload';
import createForm from '../../createForm';
import Files from './Files';
import FormDebug from '../../FormDebug';
import Body from '../Image/ImageDefaultBody';

const CroppperDemo = ({ src, onSubmit }) => {
  return (
    <div style={{ border: '2px dashed red' }}>
      <img alt="" src={src.preview} width={400} height={400} style={{ objectFit: 'cover' }} />
      <button
        type="button"
        onClick={() => {
          onSubmit(src);
        }}
      >
        Crop this pic
      </button>
    </div>
  );
};

const FilesFormView = (props) => (
  <Form>
    <Field {...props.control('singleFile')} />
    <Field {...props.control('files')} />
    <Field {...props.control('files3')} />
    <Field {...props.control('files4')} />
    <Field {...props.control('files5')} />
    <Field {...props.control('files6')} />
    <Field {...props.control('files7')} />
    <Field {...props.control('withCropper')} />
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
    singleFile: {
      title: 'Files2: isMulti, custom body',
      component: Files,
      isMulti: false,
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
    files7: {
      title: 'Files7',
      component: Files,
      isMulti: true,
      valueType: 'object', // , 'url', 'blob', 'base64' , default == 'url'
    },
    withCropper: {
      title: 'withCropper',
      component: Files,
      type: 'image',
      hasCropper: true,
      CropperComponent: CroppperDemo,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Files ', () => (
    <StoryWithUpload>
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
          singleFile: 'https://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg',
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
          files7: [
            { url: 'https://pp.userapi.com/c636819/v636819936/346c3/6xIvJ0BI8rs.jpg' },
            { url: 'https://avatanplus.com/files/resources/mid/56bced54bd17f152d1ff1327.png' },
            { url: 'https://a.d-cd.net/8dabadas-960.jpg' },
            { url: 'http://www.setwalls.ru/download.php?file=201306/2560x1440/setwalls.ru-58752.jpg' },
            { url: 'http://krasa.tk/wp-content/uploads/2015/11/face.jpg' },
            { url: 'https://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg' },
          ],
        }}
      />
    </StoryWithUpload>
  ));
