"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lekanmediaSharedUi = _interopRequireDefault(require("@bit/lekanmedia.shared-ui.toggle-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavBar = /*#__PURE__*/function (_Component) {
  _inherits(NavBar, _Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    var _this;

    _classCallCheck(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      status: 'top'
    });

    return _this;
  }

  _createClass(NavBar, [{
    key: "componentDidMount",
    // Toggle nav color
    value: function componentDidMount() {
      var _this2 = this;

      this.listener = document.addEventListener("scroll", function (e) {
        var scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 10) {
          if (_this2.state.status !== "bottom") {
            _this2.setState({
              status: "bottom"
            });
          }
        } else {
          if (_this2.state.status !== "top") {
            _this2.setState({
              status: "top"
            });
          }
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      document.removeEventListener("scroll", this.listener);
    }
  }, {
    key: "render",
    value: function render() {
      // Toggle dark mode
      var icon;

      if (localStorage.getItem('darkMode') !== 'enabled') {
        icon = /*#__PURE__*/_react.default.createElement("i", {
          className: "fa fa-toggle-off fa-2x mt-2",
          onClick: this.enableDarkMode
        });
      } else {
        icon = /*#__PURE__*/_react.default.createElement("i", {
          className: "fa fa-toggle-on fa-2x mt-2",
          onClick: this.disableDarkMode
        });
      }

      return /*#__PURE__*/_react.default.createElement("header", {
        id: "tms-nav",
        className: "black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp ".concat(this.state.status === 'top' ? "" : "nav-strict")
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "overlay"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("nav", {
        className: "navbar navbar-expand-lg mh-nav nav-btn"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "navbar-brand",
        href: "index.html"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "tms.png",
        width: "100",
        height: "200",
        alt: "",
        className: "img-fluid"
      })), /*#__PURE__*/_react.default.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "navbar-toggler-icon icon"
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "navbar-nav mr-0 ml-auto"
      }, /*#__PURE__*/_react.default.createElement("li", {
        className: "nav-item active"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "nav-link",
        href: "#mh-home"
      }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "nav-link",
        href: "#mh-about"
      }, "About")), /*#__PURE__*/_react.default.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "nav-link",
        href: "#mh-skills"
      }, "Skills")), /*#__PURE__*/_react.default.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "nav-link",
        href: "#mh-contact"
      }, "Contact")), /*#__PURE__*/_react.default.createElement("li", null, icon, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_lekanmediaSharedUi.default, null)))))))));
    }
  }]);

  return NavBar;
}(_react.Component);

var _default = NavBar;
exports.default = _default;

//# sourceMappingURL=NavBar.js.map