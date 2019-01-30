import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import If from 'react-if';
import Box from '../Box';
import { Title, Subtitle, IconWrapper, ActionsWrapper } from './EmptyContainer.styles';

class EmptyContainer extends PureComponent {
  static propTypes = {
    icon: PropTypes.any,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    actions: PropTypes.any,
  };
  static defaultProps = {
    icon: null,
    subtitle: null,
    actions: null,
  };
  render() {
    const {
      title,
      subtitle,
      icon,
      actions,
    } = this.props;
    return (
      <Box paint="transparent">
        <Box.Body padded>
          <If condition={icon}>
            <IconWrapper>{icon}</IconWrapper>
          </If>
          <Title>{title}</Title>
          <If condition={subtitle}>
            <Subtitle>{subtitle}</Subtitle>
          </If>
          <If condition={actions}>
            <ActionsWrapper>
              {actions}
            </ActionsWrapper>
          </If>
        </Box.Body>
      </Box>
    );
  }
}

export default EmptyContainer;
