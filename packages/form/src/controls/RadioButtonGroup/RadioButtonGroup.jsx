import React, { PureComponent } from 'react';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';
import ButtonGroup from '@lskjs/button/ButtonGroup';
import Bool from '../Checkbox/Bool';
import StyledButton, { Wrapper } from './RadioButtonGroup.styles';

class RadioButtonGroup extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      title: PropTypes.any,
    })),
    value: PropTypes.string,
    block: PropTypes.bool,
    paint: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    options: [],
    block: false,
    value: null,
    paint: 'primary',
    onChange: null,
  }

  onChange(value) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  }

  render() {
    const {
      options,
      value,
      paint,
      block,
      ...props
    } = this.props;
    return (
      <ButtonGroup
        panel
        {...omit(props, ['onChange'])}
      >
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

export default props => <Bool {...props} componentClass={RadioButtonGroup} />;
