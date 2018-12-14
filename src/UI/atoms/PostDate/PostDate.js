import styled from 'react-emotion';

export default styled('div')`
  background: ${p => p.theme.ui.colors.white};
  position: absolute;
  top: 0;
  height: 100%;
  right: 0;
  display: flex;
  align-items: center;
  font-size: 80%;
`;
