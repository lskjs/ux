import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

const shouldForwardProp = (prop) =>
  !['lineHeight', 'paragraph', 'textOverflow', 'color', 'view', 'align', 'width', 'as'].includes(prop);

export default styled('div', { shouldForwardProp })`
  color: ${(p) => p.color || getTheme(p.theme, 'colors.main')};
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  line-height: 1.8;
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
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
`;
