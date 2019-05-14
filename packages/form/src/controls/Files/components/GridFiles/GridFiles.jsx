import React from 'react';
import { Row, Col } from '@lskjs/ui/Grid';
import GridFile from '../GridFile';
import normilizeFiles from '../normilizeFiles';
// import { GridFiles } from './GridFiles.styles';

const GridFiles = ({ items }) => {
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
          <GridFile
            {...item}
          />
        </Col>
      ))}
    </Row>
  );
};

export default GridFiles;
