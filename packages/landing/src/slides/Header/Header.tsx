/* eslint-disable react/prop-types */
import React from 'react';

interface HeaderProps {
  brand: any;
  menu: any;
}

const Header: React.FC<HeaderProps> = ({ brand, menu }) => (
  <header>
    <div style={{ height: '100%' }}>
      <div>
        <div>{brand}</div>
        <div>Search</div>
        <div>
          {menu.map((item: any) => (
            <a key={item.key}>{item.title}</a>
          ))}
        </div>
        <div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
