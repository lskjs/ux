import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


import { ProfileCardItem, ProfileCardAvatar } from './ProfileCardBig.styles';


class ProfileCardBig extends PureComponent {
  static propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.string,
    sign: PropTypes.string,
  };
  static defaultProps = {
    img: null,
    name: null,
    info: null,
    sign: null,
  }
  render() {
    const {
      img,
      name,
      info,
      sign,
    } = this.props;
    return (
      <ProfileCardItem>
        <ProfileCardAvatar size={100} src={img} shape="circle" />
        <h4>{name}</h4>
        <span>{info}</span>
        <p>{sign}</p>
      </ProfileCardItem>
    );
  }
}

export default ProfileCardBig;
