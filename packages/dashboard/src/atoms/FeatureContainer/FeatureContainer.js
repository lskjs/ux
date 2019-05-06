import styled from 'react-emotion';

const Col = 'div'; // import Col from 'reactstrap/lib/Col';

export default styled(Col)`
  margin-bottom: 3rem;
  font-family: ${p => p.theme.fontFamily};
`;
