/* eslint import/no-extraneous-dependencies: 0 */
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div', { shouldForwardProp: (prop) => !['align'].includes(prop) })`
  padding: 20px 16px 24px;
  position: relative;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  text-align: ${(props) => props.align};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => {
    switch (props.align) {
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      default:
        return 'flex-start';
    }
  }};
  color: ${(p) => getTheme(p.theme, 'colors.main')};

  > *:not(:last-child) {
    margin-right: 12px;
  }
`;
