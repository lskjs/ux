import styled from 'react-emotion';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('button');

export default styled(dynamicTag)`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background-color: ${p => p.theme.colors.lighterPrimary};
  color: ${p => p.theme.colors.primary};
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: background-color .2s ease, color .2s ease, box-shadow .2s ease;
  will-change: background-color, color, box-shadow;

  margin: 8px;
  box-shadow: 0 0 0 8px transparent;

  &:hover {
    box-shadow: 0 0 0 8px ${p => p.theme.colors.lightPrimary};
  }

  ${p => (p.small && `
    width: 24px;
    height: 24px;
    font-size: 16px;
  `)}

  ${p => (p.child && `
    font-size: 11px;
  `)}

  ${p => (p.active && `
    background-color: ${p.theme.colors.primary};
    color: white;
  `)}

  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: white;
  }

  > svg {
    display: flex;
  }

  ${p => (p.inverse && `
    background-color: ${p.theme.colors.primary};
    color: white;

    ${p.active && `
      background-color: ${p.theme.colors.primary};
      color: white;
    `}

    &:hover {
      background-color: ${p.theme.colors.primary};
      color: white;
    }

    ${p.disabled && `
      background-color: #e3e3e3;
      cursor: not-allowed;
      color: #fff;

      &:hover {
        background-color: #e3e3e3;
        color: #fff;
      }
    `}
  `)}

  ${p => (p.transparent && `
    background-color: transparent;
    color: rgba(74, 74, 74, 0.28);
    font-size: 15px;

    ${p.active && `
      background-color: transparent;
      color: rgba(74, 74, 74, 0.6);
    `}

    &:hover {
      background-color: transparent;
      color: rgba(74, 74, 74, 0.6);
    }
  `)}

  ${p => (p.disabled && `
    background-color: #f9f9f9;
    cursor: not-allowed;
    color: #3e3e3e;

    &:hover {
      background-color: #f9f9f9;
      color: #3e3e3e;
    }
  `)}
`;
