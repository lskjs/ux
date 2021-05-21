import PropTypes, { objectOf } from 'prop-types';
import React, { PureComponent } from 'react';
import RadioBlank from 'react-icons2/mdi/checkbox-blank-circle-outline';
import CheckboxBlank from 'react-icons2/mdi/checkbox-blank-outline';
import CheckboxCheck from 'react-icons2/mdi/checkbox-marked';
import RadioCheck from 'react-icons2/mdi/checkbox-marked-circle';

import { Additional, Block, Footer, General, Header, Icon, Info, Item, Label } from './ExtendedCheckblock.styles';

export class ExtendedCheckblock extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { onChange, value, type } = this.props;
    if (onChange) onChange(type === 'radio' ? true : !value);
  }
  render() {
    const { children, label, validationState, info, disabled, block, type, height, value, ...props } = this.props;
    let checkIcon;
    let blankIcon;
    if (type === 'checkbox') {
      checkIcon = <CheckboxCheck />;
      blankIcon = <CheckboxBlank />;
    } else if (type === 'radio') {
      checkIcon = <RadioCheck />;
      blankIcon = <RadioBlank />;
    }
    return (
      <Block checked={value} disabled={disabled} hasChildren={children} type="button" {...props}>
        {/* <DEV json={{ value }} /> */}
        <General>
          <Item
            error={validationState === 'error'}
            block={block}
            onClick={this.handleClick}
            disabled={disabled}
            type="button"
            style={{ height }}
          >
            <Header>
              <Icon isActive={!!value}>{value ? checkIcon : blankIcon}</Icon>
              <Label>{label}</Label>
            </Header>
            {!!info && (
              <Footer>
                <Info>{info}</Info>
              </Footer>
            )}
          </Item>
        </General>
        {!!children && <Additional>{children}</Additional>}
      </Block>
    );
  }
}

ExtendedCheckblock.propTypes = {
  value: PropTypes.bool,
  block: PropTypes.bool,
  children: objectOf(PropTypes.any),
  label: PropTypes.string.isRequired,
  validationState: PropTypes.oneOf(['success', 'warning', 'error']),
  info: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['radio', 'checkbox']),
};
ExtendedCheckblock.defaultProps = {
  value: false,
  block: false,
  info: null,
  onChange: null,
  validationState: null,
  children: null,
  disabled: false,
  type: 'checkbox',
};

export default ExtendedCheckblock;
