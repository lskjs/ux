import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  display: flex;

  > div {
    width: 50px;
    height: 60px;
    border-radius: 4px;
    background-color: ${p => getTheme(p.theme, 'colors.white')};
    margin-left: 8px;
  }
  > div:first-of-type {
    margin-left: 0;
  }

  > div > input {
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    color: ${p => getTheme(p.theme, 'colors.main')};
    font-style: normal;
    line-height: 1.13;
    letter-spacing: -0.29px;
    text-align: center;

    border-radius: 4px;
    border: solid 1px ${p => getTheme(p.theme, 'colors.gray')};
    background-color: ${p => getTheme(p.theme, 'colors.white')};
  }

  > div > input:active,
  input:focus {
    border-color: ${p => getTheme(p.theme, 'colors.gray')} !important;
  }
`;
