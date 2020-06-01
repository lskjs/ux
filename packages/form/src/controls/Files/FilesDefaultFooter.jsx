import React from 'react';
import Button from '@lskjs/button';
import T from '@lskjs/t';
import Box from './components/Box';
import GridFiles from './components/GridFiles';

const FilesDefaultFooter = ({ value, onRemoveAll, onRemove }) => {
  if (!value) return null;
  const arrayValue = Array.isArray(value) ? value : [value];
  return (
    <Box paint="transparent">
      <Box.Header padded>
        {arrayValue.length && (
          <>
            <T name="lskComponents.filesCount" count={arrayValue.length} />
            <Button type="button" paint="danger" size="extraSmall" bordered onClick={onRemoveAll}>
              <T name="lskComponents.onRemoveFiles" />
            </Button>
          </>
        )}
      </Box.Header>
      <Box.Body>
        <GridFiles items={arrayValue} onRemove={onRemove} />
      </Box.Body>
    </Box>
  );
};

export default FilesDefaultFooter;
