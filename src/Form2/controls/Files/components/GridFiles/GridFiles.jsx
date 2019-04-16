import React from 'react';
import GridFile from '../GridFile';
import { Row, Col } from '../../../../../Grid';
// import { GridFiles } from './GridFiles.styles';

const GridFiles = ({ items }) => (
  <Row>
    {items.map((item, i) => (
      <Col
        key={i} {/* eslint-disable-line react/no-array-index-key */}
        xs={12}
        lg={4}
        sm={6}
        md={6}
      > 
        <GridFile
          item={item}
        />
      </Col>
  ))}
  </Row>
);

export default GridFiles;
