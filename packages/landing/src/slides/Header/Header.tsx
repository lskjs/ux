import React from 'react';
import Grid from '@lskjs/grid';
import * as Styles from './Header.styles';

interface HeaderProps {
  data: any,
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  console.log('Header', data);
  return (
    <Styles.Wrapper>
      <Grid.Container style={{ height: '100%' }}>
        <Styles.Inner>
          <Styles.Brand>
            {data.brand}
          </Styles.Brand>
          <Styles.SearchWrapper>
            Search
          </Styles.SearchWrapper>
          <Styles.MenuWrapper>
            {data.menu.map((item: any) => (
              <Styles.MenuItem key={item.key} activeClassName="selected">
                {item.title}
              </Styles.MenuItem>
            ))}
          </Styles.MenuWrapper>
          <Styles.RightMenu>
            <Styles.RightMenuItem>
              Item
            </Styles.RightMenuItem>
            <Styles.RightMenuItem>
              Item
            </Styles.RightMenuItem>
          </Styles.RightMenu>
        </Styles.Inner>
      </Grid.Container>
    </Styles.Wrapper>
  );
}

export default Header;
