"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultGetParams = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mobx = require("mobx");

var _bluebird = _interopRequireDefault(require("bluebird"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _getParamsFromQuery = _interopRequireDefault(require("./getParamsFromQuery"));

var _getQueryFromParams = _interopRequireDefault(require("./getQueryFromParams"));

var DEBUG = __DEV__ && false;
var omitKeys = ['filter', 'sort', 'sortBy', 'search', 'skip', 'limit'];

var defaultGetParams = function defaultGetParams(store) {
  return {
    filter: (0, _mobx.toJS)(store.filter),
    sort: (0, _mobx.toJS)(store.sort),
    limit: (0, _mobx.toJS)(store.limit),
    skip: (0, _mobx.toJS)(store.skip),
    search: (0, _mobx.toJS)(store.search)
  };
};

exports.defaultGetParams = defaultGetParams;

var connectListStore =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(_ref) {
    var page, listStore, query, _ref$getParams, getParams, propsDefaultParams, defaultParams, queryParams, remove, removeWrapper;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = _ref.page, listStore = _ref.listStore, query = _ref.query, _ref$getParams = _ref.getParams, getParams = _ref$getParams === void 0 ? defaultGetParams : _ref$getParams, propsDefaultParams = _ref.params;
            defaultParams = propsDefaultParams || getParams(listStore);
            DEBUG && console.log('connectListStore', query, defaultParams);

            if (query) {
              queryParams = (0, _getParamsFromQuery.default)(query, defaultParams);
              DEBUG && console.log('queryParams setState', queryParams);
              listStore.setState(queryParams);
            }

            _context2.next = 6;
            return _bluebird.default.delay(10);

          case 6:
            // return () => {}
            remove = (0, _mobx.autorun)(
            /*#__PURE__*/
            (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee() {
              var params, string;
              return _regenerator.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      params = (0, _objectSpread2.default)({}, (0, _omit.default)(query, omitKeys), getParams(listStore));
                      DEBUG && console.log('autorun', params, defaultParams, (0, _omit.default)(query, omitKeys), (0, _objectSpread2.default)({}, (0, _omit.default)(query, omitKeys)));
                      string = (0, _getQueryFromParams.default)(params, defaultParams);
                      if (string) string = "?".concat(string); // console.log('COMPARE', page.uapp.history.location.search, string, page.uapp.history.location.search === string);

                      if (!(page.uapp.history.location.search === string)) {
                        _context.next = 6;
                        break;
                      }

                      return _context.abrupt("return");

                    case 6:
                      DEBUG && console.log('connectListStore: waiting for refresh', page.uapp.history.location.search, '=>', string, page.uapp);

                      if (!__DEV__) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 10;
                      return _bluebird.default.delay(1000);

                    case 10:
                      page.uapp.history.replace({
                        search: string,
                        method: 'replaceState'
                      });

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

            removeWrapper = function removeWrapper() {
              DEBUG && console.log('REMOVE @@@!!!!');
              remove();
            };

            if (__DEV__) {
              setTimeout(function () {
                DEBUG && console.log('AUTOREMOVE');
                removeWrapper();
              }, 30000);
            }

            return _context2.abrupt("return", removeWrapper);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function connectListStore(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = connectListStore;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0TGlzdFN0b3JlLmpzIl0sIm5hbWVzIjpbIkRFQlVHIiwiX19ERVZfXyIsIm9taXRLZXlzIiwiZGVmYXVsdEdldFBhcmFtcyIsInN0b3JlIiwiZmlsdGVyIiwic29ydCIsImxpbWl0Iiwic2tpcCIsInNlYXJjaCIsImNvbm5lY3RMaXN0U3RvcmUiLCJwYWdlIiwibGlzdFN0b3JlIiwicXVlcnkiLCJnZXRQYXJhbXMiLCJwcm9wc0RlZmF1bHRQYXJhbXMiLCJwYXJhbXMiLCJkZWZhdWx0UGFyYW1zIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5UGFyYW1zIiwic2V0U3RhdGUiLCJQcm9taXNlIiwiZGVsYXkiLCJyZW1vdmUiLCJzdHJpbmciLCJ1YXBwIiwiaGlzdG9yeSIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm1ldGhvZCIsInJlbW92ZVdyYXBwZXIiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sSUFBSSxLQUF6QjtBQUVBLElBQU1DLFFBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLFFBQW5CLEVBQTZCLFFBQTdCLEVBQXVDLE1BQXZDLEVBQStDLE9BQS9DLENBQWpCOztBQUVPLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDeENDLElBQUFBLE1BQU0sRUFBRSxnQkFBS0QsS0FBSyxDQUFDQyxNQUFYLENBRGdDO0FBRXhDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQUtGLEtBQUssQ0FBQ0UsSUFBWCxDQUZrQztBQUd4Q0MsSUFBQUEsS0FBSyxFQUFFLGdCQUFLSCxLQUFLLENBQUNHLEtBQVgsQ0FIaUM7QUFJeENDLElBQUFBLElBQUksRUFBRSxnQkFBS0osS0FBSyxDQUFDSSxJQUFYLENBSmtDO0FBS3hDQyxJQUFBQSxNQUFNLEVBQUUsZ0JB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QUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmaEMsZ0JBQUFBLEtBQUssSUFBSWtCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBVDtBQUNBWSxnQkFBQUEsYUFBYTtBQUNkLGVBSFMsRUFHUCxLQUhPLENBQVY7QUFJRDs7QUEvQ3NCLDhDQWlEaEJBLGFBakRnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQnJCLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7ZUFxRGVBLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b3J1biwgdG9KUyB9IGZyb20gJ21vYngnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IG9taXQgZnJvbSAnbG9kYXNoL29taXQnO1xuaW1wb3J0IGdldFBhcmFtc0Zyb21RdWVyeSBmcm9tICcuL2dldFBhcmFtc0Zyb21RdWVyeSc7XG5pbXBvcnQgZ2V0UXVlcnlGcm9tUGFyYW1zIGZyb20gJy4vZ2V0UXVlcnlGcm9tUGFyYW1zJztcblxuY29uc3QgREVCVUcgPSBfX0RFVl9fICYmIGZhbHNlO1xuXG5jb25zdCBvbWl0S2V5cyA9IFsnZmlsdGVyJywgJ3NvcnQnLCAnc29ydEJ5JywgJ3NlYXJjaCcsICdza2lwJywgJ2xpbWl0J107XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0R2V0UGFyYW1zID0gc3RvcmUgPT4gKHtcbiAgZmlsdGVyOiB0b0pTKHN0b3JlLmZpbHRlciksXG4gIHNvcnQ6IHRvSlMoc3RvcmUuc29ydCksXG4gIGxpbWl0OiB0b0pTKHN0b3JlLmxpbWl0KSxcbiAgc2tpcDogdG9KUyhzdG9yZS5za2lwKSxcbiAgc2VhcmNoOiB0b0pTKHN0b3JlLnNlYXJjaCksXG59KTtcblxuY29uc3QgY29ubmVjdExpc3RTdG9yZSA9IGFzeW5jICh7XG4gIHBhZ2UsIGxpc3RTdG9yZSwgcXVlcnksIGdldFBhcmFtcyA9IGRlZmF1bHRHZXRQYXJhbXMsIHBhcmFtczogcHJvcHNEZWZhdWx0UGFyYW1zLFxufSkgPT4ge1xuICBjb25zdCBkZWZhdWx0UGFyYW1zID0gcHJvcHNEZWZhdWx0UGFyYW1zIHx8IGdldFBhcmFtcyhsaXN0U3RvcmUpO1xuICBERUJVRyAmJiBjb25zb2xlLmxvZygnY29ubmVjdExpc3RTdG9yZScsIHF1ZXJ5LCBkZWZhdWx0UGFyYW1zKTtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBnZXRQYXJhbXNGcm9tUXVlcnkocXVlcnksIGRlZmF1bHRQYXJhbXMpO1xuICAgIERFQlVHICYmIGNvbnNvbGUubG9nKCdxdWVyeVBhcmFtcyBzZXRTdGF0ZScsIHF1ZXJ5UGFyYW1zKTtcbiAgICBsaXN0U3RvcmUuc2V0U3RhdGUocXVlcnlQYXJhbXMpO1xuICB9XG5cbiAgYXdhaXQgUHJvbWlzZS5kZWxheSgxMCk7XG4gIC8vIHJldHVybiAoKSA9PiB7fVxuICBjb25zdCByZW1vdmUgPSBhdXRvcnVuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAuLi5vbWl0KHF1ZXJ5LCBvbWl0S2V5cyksXG4gICAgICAuLi5nZXRQYXJhbXMobGlzdFN0b3JlKSxcbiAgICB9O1xuICAgIERFQlVHICYmIGNvbnNvbGUubG9nKCdhdXRvcnVuJywgcGFyYW1zLCBkZWZhdWx0UGFyYW1zLCBvbWl0KHF1ZXJ5LCBvbWl0S2V5cyksIHtcblxuICAgICAgLi4ub21pdChxdWVyeSwgb21pdEtleXMpLFxuICAgIH0pO1xuXG4gICAgbGV0IHN0cmluZyA9IGdldFF1ZXJ5RnJvbVBhcmFtcyhwYXJhbXMsIGRlZmF1bHRQYXJhbXMpO1xuICAgIGlmIChzdHJpbmcpIHN0cmluZyA9IGA/JHtzdHJpbmd9YDtcbiAgICAvLyBjb25zb2xlLmxvZygnQ09NUEFSRScsIHBhZ2UudWFwcC5oaXN0b3J5LmxvY2F0aW9uLnNlYXJjaCwgc3RyaW5nLCBwYWdlLnVhcHAuaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2ggPT09IHN0cmluZyk7XG4gICAgaWYgKHBhZ2UudWFwcC5oaXN0b3J5LmxvY2F0aW9uLnNlYXJjaCA9PT0gc3RyaW5nKSByZXR1cm47XG4gICAgREVCVUcgJiYgY29uc29sZS5sb2coJ2Nvbm5lY3RMaXN0U3RvcmU6IHdhaXRpbmcgZm9yIHJlZnJlc2gnLCBwYWdlLnVhcHAuaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2gsICc9PicsIHN0cmluZywgcGFnZS51YXBwKTtcblxuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmRlbGF5KDEwMDApO1xuICAgIH1cbiAgICBwYWdlLnVhcHAuaGlzdG9yeS5yZXBsYWNlKHtcbiAgICAgIHNlYXJjaDogc3RyaW5nLFxuICAgICAgbWV0aG9kOiAncmVwbGFjZVN0YXRlJyxcbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHJlbW92ZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgREVCVUcgJiYgY29uc29sZS5sb2coJ1JFTU9WRSBAQEAhISEhJyk7XG4gICAgcmVtb3ZlKCk7XG4gIH07XG5cbiAgaWYgKF9fREVWX18pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIERFQlVHICYmIGNvbnNvbGUubG9nKCdBVVRPUkVNT1ZFJyk7XG4gICAgICByZW1vdmVXcmFwcGVyKCk7XG4gICAgfSwgMzAwMDApO1xuICB9XG5cbiAgcmV0dXJuIHJlbW92ZVdyYXBwZXI7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RMaXN0U3RvcmU7XG4iXX0=