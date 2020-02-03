import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  width: 100%;
  background-color: ${p => getTheme(p.theme, 'colors.mainBackground')};
  padding: 4px 8px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  ${p => (p.dark && `
    background-color: #f0f0f0;
  `)}
  ${p => (p.continuous && `
    flex: 1;
  `)}
`;

export const PageTitle = styled('div')`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-size: 26px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.15;
  letter-spacing: -0.1px;

  text-align: left;
  color: ${p => getTheme(p.theme, 'colors.main')};
  margin: 8px 0 0;
  display: flex;
  align-items: flex-end;
  min-height: 40px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 450px) {
    align-items: center !important;
  }
`;
