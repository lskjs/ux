import React from 'react';
import If from 'react-if';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';
import Box from './components/Box';
import GridFiles from './components/GridFiles';

const FilesDefaultFooter = ({ value, onRemoveAll, onRemove }) => (
  <If condition={Boolean(Array.isArray(value) || value)}>
    <Box paint="transparent">
      <Box.Header padded>
        <If condition={value && value.length}>
          <>
            <T name="lskComponents.filesCount" count={Array.isArray(value) ? value.length : 1} />
            <Button type="button" paint="danger" size="extraSmall" bordered onClick={onRemoveAll}>
              <T name="lskComponents.onRemoveFiles" />
            </Button>
          </>
        </If>
      </Box.Header>
      <Box.Body>
        <GridFiles items={Array.isArray(value) ? value : [value]} onRemove={onRemove} />
      </Box.Body>
    </Box>
  </If>
);

export default FilesDefaultFooter;
