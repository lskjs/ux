import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import { Wrapper, Left, Right } from './Sider.styles';

/**
 * Контейнер, разделяющий контент на две стороны.
 */
class Sider extends PureComponent {
  static propTypes = {
    /** Вертикальный вариант */
    verticalView: PropTypes.bool,
    /** Вертикальный вариант */
    verticalGap: PropTypes.number,
    /** Обрезание текста */
    isOverflow: PropTypes.bool,
    /** Блок слева, который растягивается в зависимости от контента */
    left: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    /** Блок справа, который заполняет оставшееся пространство */
    right: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    /** Отступ между блоками */
    gap: PropTypes.number,
    /** Вертикальное выравнивание */
    verticalAlign: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
    /** Высота блока */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    centeringLeftBlock: PropTypes.bool,
    centeringRightBlock: PropTypes.bool,
    mobile: PropTypes.bool,
  }
  static defaultProps = {
    left: null,
    right: null,
    gap: null,
    height: null,
    verticalAlign: 'center',
    isOverflow: false,
    centeringLeftBlock: false,
    centeringRightBlock: false,
    verticalView: false,
    mobile: false,
    verticalGap: null,
  }
  render() {
    const {
      left,
      right,
      gap,
      height,
      verticalAlign,
      isOverflow,
      centeringLeftBlock,
      centeringRightBlock,
      verticalView,
      mobile,
      verticalGap,
      ...props
    } = this.props;
    return (
      <Wrapper
        isOverflow={isOverflow}
        verticalView={verticalView}
        verticalAlign={verticalAlign}
        mobile={mobile}
        {...props}
      >
        <If condition={!!left}>
          <Left
            centeringLeftBlock={centeringLeftBlock}
            centeringRightBlock={centeringRightBlock}
            height={height}
            gap={right ? gap : 0}
            verticalGap={verticalGap}
          >
            {left}
          </Left>
        </If>
        <If condition={!!right}>
          <Right isOverflow={isOverflow} mobile={mobile} centeringRightBlock={centeringRightBlock}>
            {right}
          </Right>
        </If>
      </Wrapper>
    );
  }
}

export default Sider;
