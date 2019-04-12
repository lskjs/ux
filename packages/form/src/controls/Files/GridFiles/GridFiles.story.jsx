import React from 'react';
import Story from '@lskjs/dev/Story';
import GridFiles from './GridFiles';

const url = [
  'https://pp.userapi.com/c636819/v636819936/346c3/6xIvJ0BI8rs.jpg',
  'https://avatanplus.com/files/resources/mid/56bced54bd17f152d1ff1327.png',
  'https://a.d-cd.net/8dabadas-960.jpg',
  'http://www.setwalls.ru/download.php?file=201306/2560x1440/setwalls.ru-58752.jpg',
  'http://krasa.tk/wp-content/uploads/2015/11/face.jpg',
  'https://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg',
];

export default ({ storiesOf }) => (
  storiesOf('Form2/components/GridFiles', module)
    .add('default', () => (
      <Story>
        <GridFiles url={url} />
      </Story>
    ))
    // .add('Multiple', () => (
    //   <Story>
    //     <Row vertical gap={8}>
    //       {urls.map((e, i) => (
    //         <Col key={i} sm={4}> {/* eslint-disable-line react/no-array-index-key */}
    //           <File url={e} />
    //         </Col>
    //       ))}
    //     </Row>
    //   </Story>
    // ))
);
