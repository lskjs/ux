import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  text-transform: capitalize;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  .ant-tag {
    float: right;
  }
`;
