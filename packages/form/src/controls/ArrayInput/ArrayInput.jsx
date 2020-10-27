import React from 'react';
import If from 'react-if';
import isArray from 'lodash/isArray';
import get from 'lodash/get';
import Button from '@lskjs/button';
import CloseIcon from 'react-icons2/mdi/close';
import IconCircleButton from '@lskjs/button/IconCircleButton';
import BaseInput from '../../components/BaseInput';

const DefaultAddButton = props => <IconCircleButton {...props} />;

const ArrayInput = ({
  form,
  field,
  maxCount,
  autoAddLastItem,
  itemInitialValue = null,
  format = () => ({}),
  createAddButton,
  ...props
}) => {
  function getValues() {
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
  function removeButtonHandler(key) {
    let value = field.value || [];
    if (!isArray(value)) value = [];
    form.setFieldValue(field.name, [
      ...value.slice(0, key),
      ...value.slice(key + 1),
    ]);
  }
  function addButtonHandler() {
    let value = field.value || [];
    if (!isArray(value)) value = [];
    form.setFieldValue(field.name, [
      ...value,
      itemInitialValue,
    ]);
  }
  let addButton = <DefaultAddButton />;
  if (typeof createAddButton === 'function') {
    addButton = createAddButton({
      onAdd: () => addButtonHandler(),
    });
  }
  const values = getValues();
  const hasError = field && field.name && !!get(form.errors, field.name);
  return (
    <>
      {values.map((value, key) => {
        return (
          <BaseInput
            // eslint-disable-next-line react/no-array-index-key
            key={key}
            {...field}
            value={value}
            debounce={0}
            {...props}
            style={{
              border: hasError ? '1px solid red' : '',
              marginBottom: 16,
            }}
            onChange={(value) => {
              const val = values;
              val[key] = value;
              form.setFieldValue(field.name, val);
            }}
            rightIcon={!(values.length === key + 1 && autoAddLastItem) && (
              <Button
                view="text"
                paint="primary"
                icon={<CloseIcon />}
                onClick={() => removeButtonHandler(key)}
                style={{ margin: '4px -4px 4px 0' }}
              />
            )}
            {...format({ field, form, ...props })}
          />
        );
      })}
      <If condition={!maxCount || values.length < maxCount}>
        {addButton}
      </If>
    </>
  );
};

export default ArrayInput;
