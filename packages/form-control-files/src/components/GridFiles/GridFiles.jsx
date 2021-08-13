import { Col, Row } from '@lskjs/grid';
import React from 'react';

import GridFile from '../GridFile';
import normilizeFiles from '../normilizeFiles';
// import { GridFiles } from './GridFiles.styles';

const GridFiles = ({ items, ...props }) => {
  const normilizedFiles = normilizeFiles(items);
  return (
    <Row>
      {normilizedFiles.map((item, i) => (
        <Col
          key={i} // eslint-disable-line react/no-array-index-key
          xs={12}
          lg={4}
          sm={6}
          md={6}
        >
          <GridFile index={i} {...item} {...props} />
        </Col>
      ))}
    </Row>
  );
};

export default GridFiles;
