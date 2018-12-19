import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slide from '../../../Slide';
import CoverTitle from '../../atoms/CoverTitle';
import CoverSubtitle from '../../atoms/CoverSubtitle';
import CoverDivider from '../../atoms/CoverDivider';

class Cover extends PureComponent {
  static Title = CoverTitle;
  static SubTitle = CoverSubtitle;
  static Divider = CoverDivider;
  static propTypes = {
    children: PropTypes.any,
    align: PropTypes.string,
  };
  static defaultProps = {
    children: null,
    align: 'left',
  };
  render() {
    const {
      children,
      align,
      ...props
    } = this.props;
    const contentProps = {};
    contentProps[align] = children;
    return (
      <Slide
        {...props}
        {...contentProps}
      />
    );
  }
}
export default Cover;
