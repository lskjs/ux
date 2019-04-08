"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

// import filterProps from './filterProps';
function createDynamicTag() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';

  var dynamicTag = function dynamicTag(_ref) {
    var componentClass = _ref.componentClass,
        children = _ref.children,
        props = (0, _objectWithoutProperties2.default)(_ref, ["componentClass", "children"]);
    return (0, _react.createElement)(componentClass, // filterProps(props, componentClass),
    props, children);
  };

  dynamicTag.propTypes = {
    componentClass: _propTypes.default.any,
    children: _propTypes.default.any
  };
  dynamicTag.defaultProps = {
    componentClass: tag
  };
  return dynamicTag;
}

var _default = createDynamicTag;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEeW5hbWljVGFnLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUR5bmFtaWNUYWciLCJ0YWciLCJkeW5hbWljVGFnIiwiY29tcG9uZW50Q2xhc3MiLCJjaGlsZHJlbiIsInByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBRUEsU0FBU0EsZ0JBQVQsR0FBdUM7QUFBQSxNQUFiQyxHQUFhLHVFQUFQLEtBQU87O0FBQ3JDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTRDO0FBQUEsUUFBekNDLGNBQXlDLFFBQXpDQSxjQUF5QztBQUFBLFFBQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxRQUFaQyxLQUFZO0FBQzdELFdBQU8sMEJBQ0xGLGNBREssRUFFTDtBQUNBRSxJQUFBQSxLQUhLLEVBSUxELFFBSkssQ0FBUDtBQU1ELEdBUEQ7O0FBU0FGLEVBQUFBLFVBQVUsQ0FBQ0ksU0FBWCxHQUF1QjtBQUNyQkgsSUFBQUEsY0FBYyxFQUFFSSxtQkFBVUMsR0FETDtBQUVyQkosSUFBQUEsUUFBUSxFQUFFRyxtQkFBVUM7QUFGQyxHQUF2QjtBQUtBTixFQUFBQSxVQUFVLENBQUNPLFlBQVgsR0FBMEI7QUFDeEJOLElBQUFBLGNBQWMsRUFBRUY7QUFEUSxHQUExQjtBQUlBLFNBQU9DLFVBQVA7QUFDRDs7ZUFFY0YsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIGltcG9ydCBmaWx0ZXJQcm9wcyBmcm9tICcuL2ZpbHRlclByb3BzJztcblxuZnVuY3Rpb24gY3JlYXRlRHluYW1pY1RhZyh0YWcgPSAnZGl2Jykge1xuICBjb25zdCBkeW5hbWljVGFnID0gKHsgY29tcG9uZW50Q2xhc3MsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBjb21wb25lbnRDbGFzcyxcbiAgICAgIC8vIGZpbHRlclByb3BzKHByb3BzLCBjb21wb25lbnRDbGFzcyksXG4gICAgICBwcm9wcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICk7XG4gIH07XG5cbiAgZHluYW1pY1RhZy5wcm9wVHlwZXMgPSB7XG4gICAgY29tcG9uZW50Q2xhc3M6IFByb3BUeXBlcy5hbnksXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIH07XG5cbiAgZHluYW1pY1RhZy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcG9uZW50Q2xhc3M6IHRhZyxcbiAgfTtcblxuICByZXR1cm4gZHluYW1pY1RhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRHluYW1pY1RhZztcbiJdfQ==