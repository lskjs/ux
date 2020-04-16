import React from 'react';
import PropTypes from 'prop-types';
import { ToggleLayer, Arrow, Transition } from 'react-laag';

const PopoverMenu = ({ trigger, layer, layerStyle, transitionDelay, placement, isToggleHover, ...props }) => (
  <ToggleLayer
    {...props}
    renderLayer={({ isOpen, layerProps, arrowStyle, layerSide, close }) => (
      <Transition isOpen={isOpen}>
        {(isMenuOpen = isOpen, onTransitionEnd) => (
          <div
            ref={layerProps.ref}
            className="layer"
            onTransitionEnd={onTransitionEnd}
            onMouseLeave={isToggleHover ? () => close() : null}
            style={{
              ...layerProps.style,
              ...layerStyle,
              transition: `opacity ${transitionDelay}ms, transform ${transitionDelay}ms`,
              opacity: isMenuOpen ? 1 : 0,
              transform: `scale(${isMenuOpen}` ? 1 : `${0.5})`,
            }}
          >
            {layer}
            <Arrow style={arrowStyle} layerSide={layerSide} backgroundColor="#fff" roundness={0.5} />
          </div>
        )}
      </Transition>
    )}
    placement={{
      anchor: 'BOTTOM_CENTER',
      autoAdjust: true,
      snapToAnchor: false,
      triggerOffset: 10,
      ...placement,
    }}
  >
    {({ triggerRef, toggle, open }) =>
      trigger ? (
        trigger({ triggerRef, toggle, open })
      ) : (
        <button type="button" ref={triggerRef} onClick={toggle}>
          asd
        </button>
      )}
  </ToggleLayer>
);

PopoverMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  layer: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  layerStyle: PropTypes.object,
  trigger: PropTypes.func,
  transitionDelay: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  placement: PropTypes.object,
  isToggleHover: PropTypes.bool,
};
PopoverMenu.defaultProps = {
  layer: null,
  layerStyle: null,
  trigger: null,
  transitionDelay: 300,
  placement: null,
  isToggleHover: false,
};

export default PopoverMenu;
