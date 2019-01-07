import React from 'react';

import autobind from 'core-decorators/lib/autobind';
import isArray from 'lodash/isArray';
import { Form, Field, FastField } from 'formik';
import If from 'react-if';
import Button from '../../Button';
import DebugJson from './DebugJson';


const DefaultRemoveButton = props => <Button paint="danger" {...props}>x</Button>;
const DefaultAddButton = props => <Button paint="primary" {...props}>+</Button>;


class ArrayOf extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !isEqual(nextProps.value, this.props.value) || !isEqual(nextState.value, this.state.value);
  // }

  // @debounce(100)
  // onChangeDebounced() {
  //   this.onChange();
  // }

  // @autobind
  // onChange() {
  //   const { value } = this.state;
  //   this.props.onChange && this.props.onChange((value || []).filter(a => a));
  // }

  // @autobind
  // onChangeHandler(i, val) {
  //   const value = [...this.state.value];
  //   value[i] = val;

  //   this.setState({
  //     value,
  //   }, () => {
  //     this.onChangeDebounced();
  //   });
  // }

  // @autobind
  // onBlurHandler(i) {
  //   if (this.state.value.length > 1) {
  //     if (this.state.value[i] === '') {
  //       const value = [...this.state.value];
  //       value.splice(i, 1);

  //       this.setState({
  //         value,
  //       }, () => {
  //         this.onChangeDebounced();
  //       });
  //     }
  //   }
  // }


  getValues() {
    const {
 field, maxCount, addLastItem, itemInitialValue = null 
} = this.props;
    let value = field.value || [];
    if (!isArray(value)) value = [];
    if (maxCount) {
      value = value.slice(0, maxCount);
    }
    if (value.length === maxCount) return value;


    if (typeof addLastItem !== 'undefined') {
      return [
        ...value,
        itemInitialValue,
      ];
    }
    return value;
  }


  @autobind
  removeButtonHandler(key) {
    const { form, field } = this.props;

    let value = field.value || [];
    if (!isArray(value)) value = [];
    // console.log('1111', value);
    // console.log('2222', [
    //   ...value.slice(0, key),
    //   ...value.slice(key + 1),
    // ]);


    form.setFieldValue(field.name, [
      ...value.slice(0, key),
      ...value.slice(key + 1),
    ]);
  }

  @autobind
  addButtonHandler() {
    const { form, field, itemInitialValue = null } = this.props;
    // console.log({ form, field });

    let value = field.value || [];
    if (!isArray(value)) value = [];

    form.setFieldValue(field.name, [
      ...value,
      itemInitialValue,
    ]);
  }

  render() {
    const {
      field,
      // form,
      // onError,
      addLastItem,
      itemComponent,
      itemProps = {},
      showRemoveButton,
      removeButton: RemoveButton = DefaultRemoveButton,
      showAddButton,
      addButton: AddButton,
      maxCount,
      // ...props
    } = this.props;
    // console.log('@#@#@#', { props, field, form });
    const values = this.getValues();
    const ItemComponent = itemComponent || DebugJson;
    return (
      <React.Fragment>
        {values.map((value, key) => {
          const children = (
            <Field
              key={key}  //eslint-disable-line
              component={ItemComponent}
              name={`${field.name}.${key}`}
              // initialValue={value}
              showRemoveButton={showRemoveButton}
              {...itemProps}
              value={value}
            />
          );
          if (!showRemoveButton || (values.length === 1 && addLastItem)) return children;
          return (
            <div>
              {children}
              <If condition={showRemoveButton}>
                <RemoveButton onClick={() => this.removeButtonHandler(key)} />
              </If>
            </div>
          );
        })}
        <If condition={(showAddButton || AddButton) && (!maxCount || values.length < maxCount)}>
          <If condition={AddButton}>
            <AddButton onClick={this.addButtonHandler} />
          </If>
          <If condition={!AddButton}>
            <DefaultAddButton onClick={this.addButtonHandler} />
          </If>
        </If>
        {/* <button>+</button> */}
      </React.Fragment>
    );
  }
}

export default ArrayOf;
