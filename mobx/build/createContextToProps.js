"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _pick = _interopRequireDefault(require("lodash/pick"));

// const hello = React.createElement('div', {}, 'hello');
var createContextToProps = function createContextToProps(Context) {
  return function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return function (Component) {
      return function (props) {
        return (// hello
          _react.default.createElement(Context.Consumer, {}, function (context) {
            return _react.default.createElement(Component, (0, _objectSpread2.default)({}, (0, _pick.default)(context, params), props));
          })
        );
      };
    };
  };
};

var _default = createContextToProps;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVDb250ZXh0VG9Qcm9wcy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0VG9Qcm9wcyIsIkNvbnRleHQiLCJwYXJhbXMiLCJDb21wb25lbnQiLCJwcm9wcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkNvbnN1bWVyIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsT0FBTztBQUFBLFNBQUk7QUFBQSxzQ0FBSUMsTUFBSjtBQUFJQSxNQUFBQSxNQUFKO0FBQUE7O0FBQUEsV0FBZSxVQUFBQyxTQUFTO0FBQUEsYUFBSSxVQUFBQyxLQUFLO0FBQUEsZUFDdkU7QUFDQUMseUJBQU1DLGFBQU4sQ0FBb0JMLE9BQU8sQ0FBQ00sUUFBNUIsRUFBc0MsRUFBdEMsRUFBMEMsVUFBQUMsT0FBTztBQUFBLG1CQUMvQ0gsZUFBTUMsYUFBTixDQUFvQkgsU0FBcEIsa0NBQ0ssbUJBQUtLLE9BQUwsRUFBY04sTUFBZCxDQURMLEVBRUtFLEtBRkwsRUFEK0M7QUFBQSxXQUFqRDtBQUZ1RTtBQUFBLE9BQVQ7QUFBQSxLQUF4QjtBQUFBLEdBQUo7QUFBQSxDQUFwQzs7ZUFVZUosb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xuLy8gY29uc3QgaGVsbG8gPSBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgJ2hlbGxvJyk7XG5jb25zdCBjcmVhdGVDb250ZXh0VG9Qcm9wcyA9IENvbnRleHQgPT4gKC4uLnBhcmFtcykgPT4gQ29tcG9uZW50ID0+IHByb3BzID0+IChcbiAgLy8gaGVsbG9cbiAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LkNvbnN1bWVyLCB7fSwgY29udGV4dCA9PiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHtcbiAgICAgIC4uLnBpY2soY29udGV4dCwgcGFyYW1zKSxcbiAgICAgIC4uLnByb3BzLFxuICAgIH0pXG4gICkpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZXh0VG9Qcm9wcztcbiJdfQ==