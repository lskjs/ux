import styled from 'react-emotion';

export default styled('div')`
  text-transform: capitalize;
  font-family: ${p => p.theme.fontFamily};
  .ant-tag {
    float: right;
  }
`;
