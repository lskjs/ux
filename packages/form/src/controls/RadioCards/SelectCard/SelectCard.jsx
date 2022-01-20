import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Check from 'react-icons2/mdi/check';

import { Block, Desc, Header, Icon, Info, Radio, Title } from './SelectCard.styles';

class SelectCard extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    icon: PropTypes.any,
    title: PropTypes.string,
    description: PropTypes.string,
    onSelect: PropTypes.func,
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
  };
  static defaultProps = {
    checked: false,
    icon: null,
    title: null,
    description: null,
    onSelect: () => {},
    validationState: null,
  };
  handleClick = () => {
    const { checked, onSelect } = this.props;
    if (onSelect) onSelect(!checked);
  };
  render() {
    const { validationState, checked, icon, title, description } = this.props;
    return (
      <Block type="button" checked={checked} validationState={validationState} onClick={this.handleClick}>
        <Header>
          <Radio>{checked && <Check />}</Radio>
          {icon && <Icon>{icon}</Icon>}
        </Header>
        <Info>
          {title && <Title>{title}</Title>}
          {description && <Desc>{description}</Desc>}
        </Info>
      </Block>
    );
  }
}

export default SelectCard;
