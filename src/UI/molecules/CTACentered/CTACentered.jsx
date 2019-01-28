import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';

import {
  Title,
  Lead,
  Muted,
  Wrapper,
} from './CTACentered.styles';

class CTACentered extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    actions: PropTypes.any,
    footer: PropTypes.string,
  };
  static defaultProps = {
    title: null,
    subtitle: null,
    actions: null,
    footer: null,
  };
  render() {
    const {
      title,
      subtitle,
      actions,
      footer,
    } = this.props;
    return (
      <Wrapper>
        <div className="container">
          <div className="col-md-8 mx-auto">
            <Title>{title}</Title>
            <Lead>
              {subtitle}
            </Lead>
            {actions}
            <If condition={footer}>
              <Muted>{footer}</Muted>
            </If>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default CTACentered;
