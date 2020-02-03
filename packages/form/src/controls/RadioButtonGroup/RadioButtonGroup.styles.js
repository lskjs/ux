import styled from '@emotion/styled';
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
  &:focus {
    background: ${p => getTheme(p.theme, 'colors.primary')};
  }
`;
