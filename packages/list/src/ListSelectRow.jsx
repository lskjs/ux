import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import autobind from '@lskjs/autobind';
import { contextToProps } from './List.context';

@contextToProps('List')
@inject('selectStore')
@observer
class ListSelectRow extends Component {
  @autobind
  handleClick() {
    const { selectStore, item } = this.props;
    selectStore.toggle(item);
  }
  render() {
    const {
      List,
      selectStore,
      item,
      componentClass,
      className,
      ...props
    } = this.props;
    if (!selectStore.items.length) {
      return (
        <List.HoverRow
          componentClass={componentClass}
          className={className}
          {...props}
        />
      );
    }
    const checked = selectStore.isChecked(item);
    return (
      <List.SelectRowWrapper
        className={className}
        onClick={this.handleClick}
        checked={checked}
      >
        {props.children}
      </List.SelectRowWrapper>
    );
    // const { selectStore, item, global } = this.props;
    // return (
    //   <Checkbox
    //     indeterminate={global && selectStore.globalIsIndeterminate()}
    //     checked={global ? selectStore.globalIsChecked() : selectStore.isChecked(item)}
    //     onClick={this.handleClick}
    //     style={{ marginBottom: 0 }}
    //   />
    // );
  }
}

export default ListSelectRow;


// // const stopPropagation = (e) => {
// //   e.preventDefault();
// //   e.stopPropagation();
// // };

// // const addStopPropagation = (props) => {
// //   if (props.onClick || !(props.clickable || props.stopPropagation)) return props;
// //   return {
// //     ...props,
// //     onClick: stopPropagation,
// //   };
// // };

// @inject('selectStore')
// @observer
// class SelectRow extends Component {
//   render() {
//     const {
//       selectStore, item, children, componentClass: Tag = 'div', ...props
//     } = this.props;
//     if (!selectStore.length) return children;

//     return (
//       <Tag
//         {...props}
//       >
//         {children}
//       </Tag>
//     );
//   }
// }


// export default SelectRow;
