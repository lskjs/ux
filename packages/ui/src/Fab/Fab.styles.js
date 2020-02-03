import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';
import { getStyles } from '@lskjs/button/Button.styles';

import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';

const dynamicTag = createDynamicTag('button');
const filteredTag = removeProps(dynamicTag, ['styleName', 'fixed']);

export default styled(filteredTag)`
  padding: 0;
  min-width: 0;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
              0px 6px 10px 0px rgba(0, 0, 0, 0.14),
              0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  margin: 8px;
  z-index: 2000;

  font-size: 24px;
  box-sizing: border-box;
  min-height: 36px;
  line-height: 1.4em;

  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-weight: 600;
  text-transform: uppercase;

  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  position: relative;
  align-items: center;
  user-select: none;
  text-decoration: none;
  justify-content: center;

  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:active {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
                0px 12px 17px 2px rgba(0, 0, 0, 0.14),
                0px 5px 22px 4px rgba(0, 0, 0, 0.12);
  }
  > svg {
    display: flex;
  }
  ${(p) => {
    switch (p.size) {
      case 'large':
        return `
          width: 56px;
          height: 56px;
          padding: 12px;
        `;
      case 'small':
        return `
          width: 40px;
          height: 40px;
          padding: 8px;
        `;
      default: return '';
    }
  }}
  ${p => (p.fixed && `
    position: fixed;
  `)}
  ${p => (p.top && `
    top: 32px;
  `)}
  ${p => (p.bottom && `
    bottom: 76px;
  `)}
  ${p => (p.right && `
    right: 14px;
  `)}
  ${p => (p.left && `
    left: 32px;
  `)}
  ${getStyles}
`;
