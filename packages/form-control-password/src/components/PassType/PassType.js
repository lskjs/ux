import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

const shouldForwardProp = (prop) =>
  !['lineHeight', 'paragraph', 'textOverflow', 'color', 'view', 'align', 'width', 'as'].includes(prop);

export default styled('div', { shouldForwardProp })`
  position: absolute;
  right: 0;
  top: -25px;
  color: ${(p) => p.color || getTheme(p.theme, 'colors.main')};
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  line-height: 1.7;
  letter-spacing: -0.1px;
  ${(p) => {
    if (p.lineHeight) {
      return `line-height: ${p.lineHeight};`;
    }
    return '';
  }}
  ${(p) => {
    if (p.letterSpacing) {
      return `letter-spacing: ${p.letterSpacing};`;
    }
    return '';
  }}
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
`;
