import ButtonGroup from '@lskjs/button/ButtonGroup';
import omit from 'lodash.omit';
import PropTypes, { objectOf } from 'prop-types';
import React, { PureComponent } from 'react';

import Bool from './Bool';
import StyledButton, { Wrapper } from './RadioButtonGroup.styles';

export class RadioButtonGroupBase extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: objectOf(PropTypes.any),
        title: objectOf(PropTypes.any),
      }),
    ),
    value: PropTypes.string,
    block: PropTypes.bool,
    paint: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    options: [],
    block: false,
    value: null,
    paint: 'primary',
    onChange: null,
  };

  onChange(value) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  }

  render() {
    const { options, value, paint, block, ...props } = this.props;
    return (
      <ButtonGroup panel {...omit(props, ['onChange'])}>
        <Wrapper block={block}>
          {options.map((item, index) => (
            <StyledButton
              key={index} // eslint-disable-line react/no-array-index-key
              size="small"
              type="button"
              paint={value === item.value ? paint : 'default'}
              active={value === item.value}
              onClick={() => {
                this.onChange(item.value);
              }}
            >
              {item.title}
            </StyledButton>
          ))}
        </Wrapper>
      </ButtonGroup>
    );
  }
}

export const RadioButtonGroup = (props) => <Bool {...props} componentClass={RadioButtonGroupBase} />;
export default RadioButtonGroup;
