import React from 'react';

import LineFile from '../LineFile';
import normilizeFiles from '../normilizeFiles';
import { LineFilesWrapper } from './LineFiles.styles';

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
