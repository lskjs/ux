import React from 'react';

import { Button, Items, LineFilesWrapper, Memory, Wrapper } from './LineFile.styles';

const LineFile = ({ title, size }) => (
  <LineFilesWrapper>
    <Wrapper>
      <Items>
        Приложенные файлы:
        {title}
      </Items>
      {size && <Memory>{`(${size})`}</Memory>}
      <Button>Скачать</Button>
    </Wrapper>
  </LineFilesWrapper>
);

export default LineFile;
