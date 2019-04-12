import React from 'react';
import File from '../File/File';
import { Row, Col } from '@lskjs/ui/Grid';
// import { GridFiles } from './GridFiles.styles';

const GridFiles = ({ url }) => (
  <Row>
    {url.map((e, i) => (
      <Col key={i} xs={12} lg={4} sm={6} md={6}> {/* eslint-disable-line react/no-array-index-key */}
        <File url={e} />
      </Col>
  ))}
  </Row>
);

export default GridFiles;
