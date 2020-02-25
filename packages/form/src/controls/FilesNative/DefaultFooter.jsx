import React from 'react';
import If from 'react-if';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';
// import { Col, Row } from '@lskjs/grid';
import Box from '../Files/components/Box';
import GridFiles from '../Files/components/GridFiles';


const DefaultFooter = ({ value, onRemoveAll, onRemove }) => (
  <If condition={Array.isArray(value) || value}>
    <Box paint="transparent">
      <Box.Header padded>
        <If condition={Boolean(value && value.length)}>
          <React.Fragment>
            <T name="lskComponents.filesCount" count={Array.isArray(value) ? value.length : 1} />
            <Button
              type="button"
              paint="danger"
              size="extraSmall"
              bordered
              onClick={onRemoveAll}
            >
              <T name="lskComponents.onRemoveFiles" />
            </Button>
          </React.Fragment>
        </If>
      </Box.Header>
      <Box.Body>
        <GridFiles
          items={Array.isArray(value) ? value : [value]}
          onRemove={onRemove}
        />
        {/* <Row vertical gap={8}>
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
        </Row> */}
      </Box.Body>
    </Box>
  </If>
);

export default DefaultFooter;
