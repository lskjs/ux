import styled from 'react-emotion';

export default styled('div')`
  margin: 18px -24px -24px;
  border-top: 1px solid ${p => p.theme.ui.colors.border};
  background-color: ${p => p.theme.ui.colors.gray100};
`;
