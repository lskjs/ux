import React from 'react';
import If from 'react-if';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';
import { Col, Row } from '@lskjs/ui/Grid';
import Box from './components/Box';
import File from './components/GridFile';


const DefaultFooter = ({ value, onRemoveFiles }) => (
  <If condition={Array.isArray(value) || value}>
    <Box paint="transparent">
      <Box.Header padded>
        <T name="lskComponents.filesCount" count={Array.isArray(value) ? value.length : 1} />
        <If condition={value && value.length}>
          <Button
            type="button"
            paint="danger"
            size="small"
            bordered
            onClick={onRemoveFiles}
          >
            <T name="lskComponents.onRemoveFiles" />
          </Button>
        </If>
      </Box.Header>
      <Box.Body>
        <Row vertical gap={8}>
          {(Array.isArray(value) ? value : [value]).map((e, i) => (
            <Col
              key={i} // eslint-disable-line react/no-array-index-key
              xs={12}
              lg={4}
              sm={6}
              md={6}
            >
              <File url={e} item={i} value={value} />
            </Col>
          ))}
        </Row>
      </Box.Body>
    </Box>
  </If>
);

export default DefaultFooter;
