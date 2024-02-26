import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import DefaultAvatar from '../Avatar';

const AvatarGroup = ({
  Avatar,
  size = 64,
  offset = -0.35,
  items = [],
  limit,
  count: initCount,
  backgroundColor,
  avatarInnerStyle: initAvatarInnerStyle,
  avatarStyle: initAvatarStyle,
}) => {
  let avatarInnerStyle = initAvatarInnerStyle;
  let avatarStyle = initAvatarStyle;

  if (!isEqual(avatarStyle, AvatarGroup.defaultProps.avatarStyle)) {
    avatarStyle = merge(AvatarGroup.defaultProps.avatarStyle, avatarStyle);
  }

  if (!isEqual(avatarInnerStyle, AvatarGroup.defaultProps.avatarInnerStyle)) {
    avatarInnerStyle = merge(AvatarGroup.defaultProps.avatarInnerStyle, avatarInnerStyle);
  }

  let renderItems = items;
  if (limit) {
    renderItems = renderItems.slice(0, limit);
  }
  const count = initCount || items.length;
  const wrapStyle = { marginLeft: size * offset, float: 'right' };
  //  style={{paddingLeft:-wrapStyle.marginLeft}};p
  return (
    <div>
      <div style={{ float: 'left', marginLeft: Math.abs(size * offset) }}>
        {renderItems.length !== count && (
          <span style={wrapStyle}>
            <Avatar
              size={size}
              placeholder={`+${count - renderItems.length}`}
              backgroundColor={backgroundColor}
              style={{ ...avatarStyle, zIndex: 100 }}
              innerStyle={avatarInnerStyle}
            />
          </span>
        )}
        {renderItems.map((item = {}, index) => (
          <span key={item._id || index} style={{ ...wrapStyle, marginLeft: size * offset }}>
            <Avatar size={size} style={avatarStyle} innerStyle={avatarInnerStyle} {...item} />
          </span>
        ))}
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
};

AvatarGroup.propTypes = {
  Avatar: PropTypes.func,
  size: PropTypes.number,
  limit: PropTypes.number,
  offset: PropTypes.number,
  count: PropTypes.number,
  items: PropTypes.array,
  backgroundColor: PropTypes.string,
  avatarStyle: PropTypes.object,
  avatarInnerStyle: PropTypes.object,
};
AvatarGroup.defaultProps = {
  Avatar: DefaultAvatar,
  size: 64,
  limit: null,
  offset: -0.35,
  count: null,
  backgroundColor: 'var(--colors-secondary, #838383)',
  items: [],
};

export default AvatarGroup;
