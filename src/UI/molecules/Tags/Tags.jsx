import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tag from 'antd/lib/tag';

class Tags extends PureComponent {
  static propTypes = {
    items: PropTypes.array,
    disabled: PropTypes.bool,
    onDelete: PropTypes.func,
    renderTag: PropTypes.func,
    color: PropTypes.string,
  }
  static defaultProps = {
    items: [],
    disabled: false,
    onDelete: null,
    renderTag: null,
    color: 'blue',
  }
  render() {
    let { renderTag } = this.props;
    const {
      color,
      items,
      disabled,
      onDelete,
    } = this.props;
    if (!renderTag) {
      renderTag = data => (
        <Tag
          key={data.key}
          color={data.color || 'blue'}
          onClose={!data.disabled ? () => data.onDelete?.(data.item.value) : null}
        >
          {data.item.title}
        </Tag>
      );
    }
    return (
      <React.Fragment>
        {items
          .map((item) => {
            return React.createElement(renderTag, {
              item,
              color,
              key: item.value,
              disabled,
              onDelete,
            });
          })}
      </React.Fragment>
    );
  }
}

export default Tags;
