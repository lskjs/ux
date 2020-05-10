import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import filterProps from '@lskjs/utils/filterProps';
import DefaultTag from '../Tag';

class TagGroup extends PureComponent {
  render() {
    const {
      Tag = DefaultTag,
      options = [],
      nullValue,
      values = [],
      color = 'blue',
      items,
      disabled,
      onLink,
      children,
      onClick,
      onClose,
      closable,
      ...props
    } = this.props;
    const tags = items || options.filter(({ value }) => values.includes(value));
    if (tags.length === 0) return nullValue || null;
    return (
      <div {...filterProps(props)}>
        {tags.map((item, index) => (
          <Tag
            key={item.key || item.value || index}
            color={color}
            disabled={disabled}
            onClose={() => onClose && onClose(item)}
            onClick={() => onClick && onClick(item)}
            closable={closable && !disabled}
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              cursor: onClick ? 'pointer' : null,
            }}
          >
            {item.title || item.children}
          </Tag>
        ))}
        {children}
      </div>
    );
  }
}

TagGroup.propTypes = {
  items: PropTypes.array,
  options: PropTypes.array,
  values: PropTypes.array,
  disabled: PropTypes.bool,
  onDelete: PropTypes.func,
  renderTag: PropTypes.func,
  color: PropTypes.string,
};
TagGroup.defaultProps = {
  items: null,
  options: [],
  values: [],
  disabled: false,
  onDelete: null,
  renderTag: null,
  color: 'blue',
};

export default TagGroup;
