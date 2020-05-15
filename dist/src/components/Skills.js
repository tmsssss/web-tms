"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var Skills = /*#__PURE__*/function (_Component) {
  _inherits(Skills, _Component);

  var _super = _createSuper(Skills);

  function Skills() {
    _classCallCheck(this, Skills);

    return _super.apply(this, arguments);
  }

  _createClass(Skills, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("section", {
        className: "mh-skills",
        id: "mh-skills"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row section-separator"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "section-title text-center col-sm-12"
      }, /*#__PURE__*/_react.default.createElement("h2", null, "Skills")), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm-12 col-md-6"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "mh-skills-inner"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "mh-professional-skill wow fadeInUp",
        "data-wow-duration": "0.8s",
        "data-wow-delay": "0.3s"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Technical Skills"), /*#__PURE__*/_react.default.createElement("div", {
        className: "each-skills"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "candidatos"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "parcial"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "nome"
      }, "Javascript"), /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem-num"
      }, "86%")), /*#__PURE__*/_react.default.createElement("div", {
        className: "progressBar"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem",
        style: {
          width: '86%'
        }
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "candidatos"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "parcial"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "nome"
      }, "Java"), /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem-num"
      }, "46%")), /*#__PURE__*/_react.default.createElement("div", {
        className: "progressBar"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem",
        style: {
          width: '86%'
        }
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "candidatos"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "parcial"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "nome"
      }, "Python"), /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem-num"
      }, "38%")), /*#__PURE__*/_react.default.createElement("div", {
        className: "progressBar"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem",
        style: {
          width: '86%'
        }
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "candidatos"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "parcial"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "nome"
      }, "PHP"), /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem-num"
      }, "17%")), /*#__PURE__*/_react.default.createElement("div", {
        className: "progressBar"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem",
        style: {
          width: '86%'
        }
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "candidatos"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "parcial"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "info"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "nome"
      }, "PHP"), /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem-num"
      }, "17%")), /*#__PURE__*/_react.default.createElement("div", {
        className: "progressBar"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "percentagem",
        style: {
          width: '86%'
        }
      })))))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm-12 col-md-6"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "mh-professional-skills wow fadeInUp",
        "data-wow-duration": "0.8s",
        "data-wow-delay": "0.5s"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Professional Skills"), /*#__PURE__*/_react.default.createElement("ul", {
        className: "mh-professional-progress"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "mh-progress mh-progress-circle",
        "data-progress": "95"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "pr-skill-name"
      }, "Communication")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "mh-progress mh-progress-circle",
        "data-progress": "55"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "pr-skill-name"
      }, "Team Work")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "mh-progress mh-progress-circle",
        "data-progress": "86"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "pr-skill-name"
      }, "Project Management")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "mh-progress mh-progress-circle",
        "data-progress": "60"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "pr-skill-name"
      }, "Creativity"))))))));
    }
  }]);

  return Skills;
}(_react.Component);

exports.default = Skills;

//# sourceMappingURL=Skills.js.map