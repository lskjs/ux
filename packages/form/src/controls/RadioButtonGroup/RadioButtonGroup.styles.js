import styled from 'react-emotion';
import Button from '@lskjs/button';
import getTheme from '@lskjs/theme/getTheme';

export const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  > button {
    ${p => p.block && 'flex-grow: 1;'}
  }
`;

export default styled(Button)`
  box-shadow: ${p => (
    p.active
      ? `0 0 0 1px ${getTheme(p.theme, `colors.${p.paint}`)}`
      : `0 0 0 1px ${getTheme(p.theme, 'colors.border')}`
  )};
`;
