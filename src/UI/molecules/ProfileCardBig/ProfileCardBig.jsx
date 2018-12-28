import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { Icon } from 'antd';

import { ProfileCardItem, ProfileCardAvatar/* , SocialIcon */ } from './ProfileCardBig.styles';

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
      ...props
    } = this.props;
    return (
      <ProfileCardItem {...props}>
        <ProfileCardAvatar size={100} src={img} shape="circle" />
        <h4>{name}</h4>
        <span>{info}</span>
        <p>{sign}</p>
        {/* <div>
          <SocialIcon><Icon type="twitter" /></SocialIcon>
          <SocialIcon><Icon type="facebook" /></SocialIcon>
          <SocialIcon><Icon type="instagram" /></SocialIcon>
        </div> */}
      </ProfileCardItem>
    );
  }
}

export default ProfileCardBig;
