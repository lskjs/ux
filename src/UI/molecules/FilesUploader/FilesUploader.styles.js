import styled from 'react-emotion';

import { createDynamicTag } from '../../../utils';

const dynamicTag = createDynamicTag('div');

export const Zone = styled(dynamicTag)`
  width: 100%;
  height: 156px;
  border: none !important;
  border-radius: 0 !important;
  @media screen and (max-width: 730px) {
    height: 100%;
  }
`;

export const UploaderFilename = styled('a')`
  font-size: 13px;
  letter-spacing: -0.1px;
  text-align: left;
  color: #4a4a4a;
  overflow: hidden;
  display: flex;
  > div {
    width: 100%;
    display: flex;
    text-align: left;
  }
  > div > span:first-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

export const Drop = styled('div')`
  width: 100%;
  height: 156px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 3px ${p => p.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 730px) {
    height: 100%;
  }
`;

export const DropText = styled('div')`
  font-family: ${p => p.theme.fontFamily};
  font-size: 20px;
  text-align: center;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 18px;
  width: 70%;
`;

export const Block = styled('div')`
  width: 100%;
  height: 156px;
  padding: 1px 1px 1px 0;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #e3e3e3;
  display: flex;
  flex-direction: column;
  ${p => (p.error && `
    border-color: #da4c5a;
  `)}
  @media screen and (max-width: 730px) {
    height: 100%;
  }
`;

export const Header = styled('div')`
  padding: 12px 16px 20px;
  background-color: #ffffff;
  flex: 1;
`;

export const Info = styled('div')`
  font-size: 13px;
  line-height: 1.43;
  letter-spacing: -0.1px;
  text-align: left;
  color: #4a4a4a;
  font-family: ${p => p.theme.fontFamily};
  margin-bottom: 22px;
`;

export const Actions = styled('div')`
  display: flex;
  justify-content: center;
`;

export const Button = styled('button')`
  padding: 12px 20px;
  border-radius: 3px;
  background-color: rgba(155, 155, 155, 0.12);
  font-family: ${p => p.theme.fontFamily};
  font-size: 13px;
  line-height: 1;
  text-align: center;
  color: ${p => p.theme.colors.primary};
  border: none;
  outline: none;
  &:hover {
    background-color: rgba(155, 155, 155, 0.24);
  }
  &:active {
    background-color: rgba(155, 155, 155, 0.36);
  }
`;

export const UploaderContent = styled('div')`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
`;

export const UploaderFile = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #e3e3e3;
  padding: 7px 12px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  > span {
    color: ${p => p.theme.colors.primary};
    font-size: 24px;
    margin-left: auto;
  }
  a {
    font-size: 13px;
    line-height: 1.43;
    letter-spacing: -0.1px;
    text-align: left;
    color: ${p => p.theme.colors.primary};
    margin-right: 8px;
  }
`;

export const UploaderSize = styled('span')`
  font-size: 14px !important;
  line-height: 1.43;
  letter-spacing: -0.1px;
  text-align: right;
  color: #9b9b9b !important;
  margin-right: 8px;
  margin-left: 0 !important;
  > span:first-child {
    cursor: pointer;
  }
  > span > svg {
    display: flex;
  }  
`;
