import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';

class Tags extends PureComponent {
  static propTypes = {
    items: PropTypes.array,
    disabled: PropTypes.bool,
    onDelete: PropTypes.func,
    renderTag: PropTypes.func,
  }
  static defaultProps = {
    items: [],
    disabled: false,
    onDelete: null,
    renderTag: null,
  }
  render() {
    let { renderTag } = this.props;
    const { items, disabled, onDelete } = this.props;
    if (!renderTag) {
      renderTag = data => (
        <Tag
          key={data.key}
          id={data.item.value}
          onClose={!data.disabled ? () => data.onDelete?.(data.item.value) : null}
          disabled={data.disabled}
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
