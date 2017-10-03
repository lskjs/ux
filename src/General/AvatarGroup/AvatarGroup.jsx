// follow
// avatar-group
// avatar.setdefault
import React, { PropTypes, Component } from 'react';
import DefaultAvatar from '../Avatar';

export default class AvatarGroup extends Component {
  static propTypes = {
    Avatar: PropTypes.func,
    size: PropTypes.number,
    limit: PropTypes.number,
    offset: PropTypes.number,
    count: PropTypes.number,
    items: PropTypes.array,
    backgroundColor: PropTypes.string,
  };
  static defaultProps = {
    Avatar: DefaultAvatar,
    size: 64,
    limit: null,
    offset: -0.35,
    count: null,
    backgroundColor: '#838383',
    items: []
  };
  render() {
    const { size = 64, offset = -0.35, items = [], limit, backgroundColor } = this.props;
    const { Avatar } = this.props;

    let renderItems = items;
    if (limit) {
      renderItems = renderItems.slice(0, limit)
    }
    let count = this.props.count || items.length;
    const wrapStyle = {marginLeft: size * offset, float: 'left'};
    //  style={{paddingLeft:-wrapStyle.marginLeft}}
    return (
      <div>
        {renderItems.map((item = {}, index) => (
          <span
            key={item._id || index}
            style={{...wrapStyle, marginLeft: ( index ? size * offset : 0)}}
          >
            <Avatar
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
              backgroundColor={backgroundColor}
            />
          </span>
        </If>
        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}
