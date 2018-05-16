import styled, { css } from 'react-emotion';
import Link from '../Link';

const defaultStyle = ({ theme }) => css`
  color: ${theme.colors.default};
  &:hover {
    color: ${theme.colors.darkGray};
  }
`;

const primaryStyle = ({ theme }) => css`
  color: ${theme.colors.primary};
  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

const secondaryStyle = ({ theme }) => css`
  color: ${theme.colors.secondary};
  &:hover {
    color: ${theme.colors.secondaryHover};
  }
`;

export default styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  ${(props) => {
    switch (props.bsStyle) {
      case 'primary': return primaryStyle;
      case 'secondary': return secondaryStyle;
      default: return defaultStyle;
    }
  }}
`;
