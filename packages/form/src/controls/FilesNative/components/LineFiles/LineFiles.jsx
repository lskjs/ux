import React from 'react';
import { LineFilesWrapper } from './LineFiles.styles';

import normilizeFiles from '../normilizeFiles';
import LineFile from '../LineFile';

const LineFiles = ({ items }) => (
  <LineFilesWrapper>
    {normilizeFiles(items).map((item, i) => (
      <LineFile
        key={i} // eslint-disable-line react/no-array-index-key
        {...item}
      />
    ))}
  </LineFilesWrapper>
);

export default LineFiles;
