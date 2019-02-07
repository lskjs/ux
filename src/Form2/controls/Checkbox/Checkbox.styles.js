import styled from 'react-emotion';

export default styled('span')`
  ${p => (p.validationState === 'error' && `
    color: ${p.theme.colors.danger};
  `)}
`;
