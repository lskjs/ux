import styled from 'react-emotion';

export default styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 0 0;
  margin-top: 18px;
  border-top: 1px solid ${p => p.theme.ui.colors.border};
`;
