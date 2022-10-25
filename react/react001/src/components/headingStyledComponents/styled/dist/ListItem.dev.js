"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BorderListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nborder: 2px solid black;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    text-decoration: underline;\n    background-color: ", ";\n    display: inline;\n    margin-left: 10px;\n\n\n    &:hover {\n        text-decoration: none;\n        backgound-color: black;\n        color: white;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListItem = _styledComponents["default"].li(_templateObject(), function (props) {
  return props.active ? "red" : "silver";
});

var BorderListItem = (0, _styledComponents["default"])(ListItem)(_templateObject2());
exports.BorderListItem = BorderListItem;
var _default = ListItem;
exports["default"] = _default;