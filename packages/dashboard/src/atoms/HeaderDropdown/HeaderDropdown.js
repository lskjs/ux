import styled from '@emotion/styled';
import Menu from 'antd/lib/menu';
import getTheme from '@lskjs/theme/getTheme';

export default styled(Menu)`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  .ant-dropdown-menu-item {
    i {
      margin-right: .5rem;
    }
  }
`;
