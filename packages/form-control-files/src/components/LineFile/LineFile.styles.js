import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Wrapper = styled.div`
  display: flex;
  font-family: ${(props) => getTheme(props.theme, 'fontFamily')};
  border-radius: 3px;
  border: solid 1px ${(p) => getTheme(p.theme, 'colors.border')};
  padding-top: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Items = styled.a`
  line-height: 1.43;
  letter-spacing: 0.2px;
  color: #4a85cc;
  margin-right: 10px;
`;

export const Memory = styled.span`
  color: ${(p) => getTheme(p.theme, 'colors.secondary')};
`;

export const Button = styled.button`
  margin-left: auto;
  border: none;
  background: none;
  color: #4a85cc;
  cursor: pointer;
  border-bottom: 1px dashed #4a85cc;
  outline: none;
  padding: 0;
  @media screen and (max-width: 440px) {
    margin-left: 0;
  }
`;

export const LineFilesWrapper = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;
