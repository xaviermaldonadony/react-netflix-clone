"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLink = exports.Logo = exports.Container = exports.Frame = exports.Background = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tbackground-color: #e50914;\n\twidth: 84px;\n\theight: fit-content;\n\tcolor: white;\n\tborder: 0;\n\tfont-size: 15px;\n\tborder-radius: 3px;\n\tpadding: 8px 17px;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tbox-sizing: border-box;\n\ttransition: background-color 0.3s;\n\n\t&:hover {\n\t\tbackground-color: #f40612;\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\theight: 32px;\n\twidth: 108px;\n\tmargin-right: 40px;\n\n\t@media (min-width: 1449px) {\n\t\theight: 45px;\n\t\twidth: 167px;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tmargin: 0 56px;\n\theight: 64px;\n\tpadding: 18px 0;\n\n\tjustify-content: space-between;\n\talign-items: center;\n\n\ta {\n\t\tdisplay: flex;\n\t}\n\n\t@media (max-width: 1000px) {\n\t\tmargin: 0 30px;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\n\tbackground: url(", ")\n\t\ttop left / cover no-repeat;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Background = _macro["default"].div(_templateObject(), function (_ref) {
  var src = _ref.src;
  return src ? "../images/misc/".concat(src, ". jpg") : '../images/misc/home-bg.jpg';
});

exports.Background = Background;

var Frame = _macro["default"].div(_templateObject2());

exports.Frame = Frame;

var Container = _macro["default"].div(_templateObject3());

exports.Container = Container;

var Logo = _macro["default"].img(_templateObject4());

exports.Logo = Logo;
var ButtonLink = (0, _macro["default"])(_reactRouterDom.Link)(_templateObject5());
exports.ButtonLink = ButtonLink;