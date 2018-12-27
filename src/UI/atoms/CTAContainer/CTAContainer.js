import styled from 'react-emotion';

import { Col } from 'reactstrap';

export default styled(Col)`
  color: ${p => (p.theme.colors.white)};
  margin-left: auto;
  font-family: ${p => p.theme.fontFamily};
  margin-right: auto;
  max-width: 54%;
`;
