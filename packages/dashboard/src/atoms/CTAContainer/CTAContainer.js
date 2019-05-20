import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

const Col = 'div'; // import Col from 'reactstrap/lib/Col';

export default styled(Col)`
  color: ${p => getTheme(p.theme, 'colors.white')};
  margin-left: auto;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  margin-right: auto;
  max-width: 54%;
`;
