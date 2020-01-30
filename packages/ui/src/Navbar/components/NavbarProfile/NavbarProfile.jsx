import React from 'react';
import Avatar from '../../../Avatar';
import * as Styles from '../../Navbar.styles';

const NavbarBrand = ({ image, name, category, ...props }) => (
  <Styles.Profile {...props}>
    <Styles.ProfileAvatarWrapper>
      <Avatar size={48} src={image} title={name} />
    </Styles.ProfileAvatarWrapper>
    <Styles.ProfileContent>
      <Styles.ProfileCategory>
        {category}
      </Styles.ProfileCategory>
      <Styles.ProfileName>
        {name}
      </Styles.ProfileName>
    </Styles.ProfileContent>
  </Styles.Profile>
);

export default NavbarBrand;
