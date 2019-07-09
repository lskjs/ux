import styled from 'react-emotion';
import Button from '@lskjs/button';
import getTheme from '@lskjs/theme/getTheme';


export default styled(Button)`
  box-shadow: ${p => (
    p.active
      ? `0 0 0 1px ${getTheme(p.theme, `colors.${p.paint}`)}`
      : `0 0 0 1px ${getTheme(p.theme, 'colors.border')}`
  )};
`;
