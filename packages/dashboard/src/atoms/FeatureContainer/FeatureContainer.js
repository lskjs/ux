import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

const Col = 'div'; // import Col from 'reactstrap/lib/Col';

export default styled(Col)`
  margin-bottom: 3rem;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
