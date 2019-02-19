import styled from 'react-emotion';

export default styled('div')`
  background-color: white;
  padding: 10;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 0 0 8px 8px;
  margin-bottom: 10;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;
