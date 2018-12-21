import styled from 'react-emotion';

export const IconWrapper = styled('div')`
  font-size: 52px;
`;

export const Header = styled('h4')`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  color: ${p => (p.theme.ui.colors.darkGrey)};
`;

export const Content = styled('div')`
  margin: .5rem 0 0;
  opacity: .87;

`;

export const Wrapper = styled('div')`
  ${p => (p.center && `
    text-align: center;
    ${IconWrapper} {
      margin: 0 auto 1rem;
    }
  `)}
`;
