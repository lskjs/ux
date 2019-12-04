import React, { Component } from 'react';
import autobind from '@lskjs/autobind';
import isArray from 'lodash/isArray';
import { Field } from 'formik';
import Tooltip from 'antd/lib/tooltip';
import CloseIcon from 'react-icons2/mdi/close';
import If from 'react-if';
import IconCircleButton from '@lskjs/button/IconCircleButton';
import DebugJson from '../DebugJson';
import Horizontal from './Horizontal';

const DefaultRemoveButton = props => <IconCircleButton {...props}><CloseIcon /></IconCircleButton>;
const DefaultAddButton = props => <IconCircleButton {...props} />;

class ArrayOf extends Component {
  getValues() {
    const {
      field, maxCount, autoAddLastItem, itemInitialValue = null,
    } = this.props;
    let value = field.value || [];
    if (!isArray(value)) value = [];
    if (maxCount) {
      value = value.slice(0, maxCount);
    }
    if (value.length === maxCount) return value;
    if (typeof autoAddLastItem !== 'undefined') {
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
    form.setFieldValue(field.name, [
      ...value.slice(0, key),
      ...value.slice(key + 1),
    ]);
  }

  @autobind
  addButtonHandler() {
    const { form, field, itemInitialValue = null } = this.props;
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
      autoAddLastItem,
      itemComponent,
      itemProps = {},
      createRemoveButton,
      showRemoveButton,
      placementRemoveButton = 'left',
      createAddButton,
      showAddButton,
      maxCount,
    } = this.props;
    const values = this.getValues();
    const ItemComponent = itemComponent || DebugJson;
    let addButton = <DefaultAddButton onClick={this.addButtonHandler} />;
    if (typeof createAddButton === 'function') {
      addButton = createAddButton({
        onAdd: () => this.addButtonHandler(),
      });
    }
    return (
      <React.Fragment>
        {values.map((value, key) => {
          const removeBtnCondition = (showRemoveButton && !(values.length === key + 1 && autoAddLastItem));
          let removeButton = <DefaultRemoveButton onClick={() => this.removeButtonHandler(key)} />;
          if (createRemoveButton) {
            removeButton = createRemoveButton({
              onRemove: () => this.removeButtonHandler(key),
            });
          }
          const children = (
            <Field
              key={key} //eslint-disable-line
              component={ItemComponent}
              name={`${field.name}.${key}`}
              showRemoveButton={showRemoveButton}
              {...itemProps}
              value={value}
            />
          );
          return (
            <Horizontal>
              <If condition={placementRemoveButton === 'left' && removeBtnCondition}>
                {removeButton}
              </If>
              <div style={{ flex: 1 }}>
                {children}
              </div>
              <If condition={placementRemoveButton === 'right' && removeBtnCondition}>
                {removeButton}
              </If>
            </Horizontal>
          );
        })}
        <If condition={values.length > 1 || showAddButton}>
          <If condition={(showAddButton || addButton) && (!maxCount || values.length < maxCount)}>
            {addButton}
          </If>
        </If>
      </React.Fragment>
    );
  }
}

export default ArrayOf;
