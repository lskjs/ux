import styled from 'react-emotion';

export default styled('section')`
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  padding: 0 0 0 19px;
  line-height: 60px;
  flex: 0 0 auto;
  background-color: ${p => p.theme.ui.colors.white};
  a {
    color: ${p => p.theme.ui.colors.darkGrey};
    &:hover {
      color: ${p => p.theme.ui.colors.darkGrey};
    }
  }
`;
