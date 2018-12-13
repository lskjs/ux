import styled from 'react-emotion';

export default styled('div')`
  color: ${p => p.theme.ui.colors.darkGrey};
  background-color: rgba(0,0,0,.01);
  border-top: 1px solid rgba(0,0,0,.05);
  border-right: 1px solid rgba(0,0,0,.1);
  flex: 0 0 auto;
  height: 44px;

  > a {
    display: block;
    padding: 0 16px 0 24px;
    line-height: 44px;
    &:focus {
      text-decoration: none;
    }
    .anticon {
      margin-right: 8px;
    }
    color: ${p => p.theme.ui.colors.darkGrey};
    &:hover {
      color: ${p => p.theme.ui.colors.darkGrey};
    }
  }
`;
