import styled from 'react-emotion';

export default styled('div')`
  font-weight: bold;
  font-family: ${p => p.theme.fontFamily};
  font-size: 16px;
  padding: 4px;
  padding-top: 10px;

  color: #2b3032;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
