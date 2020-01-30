import React from 'react';
import * as Styles from './Navbar.styles';

import NavbarBrand from './components/NavbarBrand';
import NavbarProfile from './components/NavbarProfile';

const Navbar = props => (
  <Styles.Base {...props} />
);

Navbar.Brand = NavbarBrand;
Navbar.Profile = NavbarProfile;

export default Navbar;
