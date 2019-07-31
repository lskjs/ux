import styled, { css } from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export const containerStyle = css`
  display: flex;
  flex-direction: row;
  padding: 12px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  transition: background-color .2s ease-out;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const typeStyle = css`
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const urlStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const centerFile = css`
  width: 100px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  overflow: hidden;
`;

export const RemoveButton = styled('span')`
  background: none;
  border: none;
  outline: none;
  opacity: 0.7;
  color: ${props => getTheme(props.theme, 'colors.danger')};
  position: absolute;
  top: 3px;
  right: 3px;
  padding: 2px;
  margin: 0;
  font-size: 24px;
  display: flex;
  z-index: 2;
  cursor: pointer;
`;

export const PreviewImage = styled('img')`
  width: 100px;
  height: 70px;
  object-fit: contain;
  display: flex;
  margin: 0 auto;
  text-align: center;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 70px;
`;
