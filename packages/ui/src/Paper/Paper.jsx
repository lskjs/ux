import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PaperStyled from './Paper.styles';

/**
 * Основа для создания блочных компонентов.
 */
class Paper extends PureComponent {
  static propTypes = {
    /** Тело компонента */
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    /** Обводка */
    bordered: PropTypes.bool,
    /** Закругление краёв */
    radius: PropTypes.bool,
    /** Тень */
    shadow: PropTypes.bool,
    /** Обрезание контента вне компонента */
    overflow: PropTypes.bool,
    /** Отступы */
    padded: PropTypes.bool,
    /** Вид компонент */
    view: PropTypes.oneOf(['translucent', 'default']),
  }

  static defaultProps = {
    children: null,
    bordered: false,
    radius: true,
    shadow: false,
    overflow: false,
    padded: false,
    view: 'default',
  }

  render() {
    const {
      children,
      bordered,
      overflow,
      radius,
      shadow,
      view,
      padded,
      ...props
    } = this.props;
    return (
      <PaperStyled
        {...props}
        bordered={bordered}
        radius={radius}
        shadow={shadow}
        view={view}
        padded={padded}
        overflow={overflow}
      >
        {children}
      </PaperStyled>
    );
  }
}

export default Paper;
