import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper } from '../FormItem.styles';

class FormTitle extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
    required: PropTypes.bool,
  }
  static defaultProps = {
    required: false,
    children: null,
  }

  render() {
    const { children, required, ...props } = this.props;
    return (
      <TitleWrapper {...props}>
        {required ? '*' : ''}
        {children}
      </TitleWrapper>
    );
  }
}

export default FormTitle;
