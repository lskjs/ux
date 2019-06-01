import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import BsTooltip from 'react-bootstrap/lib/Tooltip';
import { Block, globalStyles } from './Tooltip.styles';

globalStyles();

class Tooltip extends PureComponent {
  static propTypes = {
    /** Уникальный идентификатор */
    id: PropTypes.string.isRequired,
    /** Текст, который будет в тултипе */
    overlay: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    /** Тип компонента */
    componentClass: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    /** Тело компонента, вокруг которого оборачивается тултип */
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    /** С какой стороны будет вылезать тултип */
    place: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    /** Задизейбленное состояние */
    disabled: PropTypes.bool,
    /** Цвет */
    color: PropTypes.string,
    /** Кастомные стили */
    className: PropTypes.string,
  }
  static defaultProps = {
    place: 'bottom',
    overlay: 'Simple Tooltip',
    componentClass: 'span',
    disabled: false,
    color: null,
    className: null,
    children: null,
  }
  render() {
    const {
      className,
      disabled,
      componentClass,
      id,
      overlay,
      place,
      children,
      color,
      ...props
    } = this.props;
    const Tag = componentClass || 'span';
    if (disabled) {
      return (
        <Block
          disabled={disabled}
          componentClass={Tag}
          {...(componentClass ? props : {})}
        >
          {children}
        </Block>
      );
    }
    const overlayTooltip = (
      <BsTooltip
        id={id}
        bsClass={cx({
          tooltipWhite: color === 'white',
          tooltip: true,
        })}
      >
        {overlay}
      </BsTooltip>
    );
    return (
      <OverlayTrigger
        placement={place}
        overlay={overlayTooltip}
        delayShow={600}
      >
        <Block
          disabled={disabled}
          componentClass={Tag}
          className={cx({
            'tooltip-block': true,
            [className]: className,
          })}
          {...(componentClass ? props : {})}
        >
          {children}
        </Block>
      </OverlayTrigger>
    );
  }
}

export default Tooltip;
