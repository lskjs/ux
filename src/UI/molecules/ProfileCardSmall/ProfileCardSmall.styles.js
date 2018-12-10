import styled from 'react-emotion';

export default styled('article')`
  border: 1px solid rgba(0,0,0,.1);
  padding: 1rem .5rem;
  border-radius: 6px;
  background-color: ${p => p.theme.ui.colors.white};
  text-align: center;
  h4 {
    margin: 0;
    font-weight: 500px;
    font-size: 0.875rem;
    line-height: 1.625rem;
  }

  span {
    opacity: .8;
  }
`;
