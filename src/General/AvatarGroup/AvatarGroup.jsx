// follow
// avatar-group
// avatar.setdefault

import React, { PropTypes, Component } from 'react';
import DefaultAvatar from '../Avatar';

export default class AvatarGroup extends Component {
  static propTypes = {
    Avatar: PropTypes.element,
  };
  static defaultProps = {
    Avatar: DefaultAvatar,
  };
  render() {
    // console.log(1111);
    const { size = 64, offset = -0.35, items = [], limit } = this.props;
    const { Avatar } = this.props;

    let renderItems = items;
    if (limit) {
      renderItems = renderItems.slice(0, limit)
    }
    let count = this.props.count || items.length;
    const wrapStyle = {marginLeft: size * offset, float: 'left'};
    //  style={{paddingLeft:-wrapStyle.marginLeft}}
    // console.log(2222, renderItems, Avatar);
    return (
      <div>
        {renderItems.map((item = {}, index) => (
          <span style={wrapStyle}>
            <Avatar
              key={item._id || index}
              size={size}
              {...item}
            />
          </span>
        ))}
        <If condition={renderItems.length !== count}>
          <span style={wrapStyle}>
            <Avatar
              size={size}
              placeholder={'+' + (count - renderItems.length)}
            />
          </span>
        </If>
        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}
