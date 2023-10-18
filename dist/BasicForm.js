"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useInput2 = _interopRequireDefault(require("./use-input"));
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BasicForm = function BasicForm(_ref) {
  var data = _ref.data,
    validate = _ref.validate,
    onFormChange = _ref.onFormChange,
    isFormSubmitted = _ref.isFormSubmitted;
  var fieldName = data.fieldName,
    fieldType = data.fieldType,
    inputType = data.inputType,
    labelName = data.labelName;
  var isFieldValid = function isFieldValid(value) {
    if (!validate) {
      return true;
    }
    switch (fieldType) {
      case "text":
      case "textarea":
        return value.trim().length >= 8;
      case "email":
        return /^[a-zA-Z0-9._%+-]+@[a-zAZ.-]+\.[a-zA-Z]{2,}$/.test(value.trim());
      case "password":
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
      case "select":
      case "checkbox":
      case "radio":
        return value.trim().length > 0;
      default:
        return false;
    }
  };
  var _useInput = (0, _useInput2["default"])(isFieldValid, onFormChange, fieldType === "checkbox" || fieldType === "radio" || fieldType === "select" ? labelName : fieldName[0], isFormSubmitted),
    enteredValue = _useInput.value,
    inputHasError = _useInput.hasError,
    valueChangeHandler = _useInput.valueChangeHandler,
    inputBlurHandler = _useInput.inputBlurHandler;
  var label = fieldType === "text" || fieldType === "textarea" ? fieldName[0] : labelName;
  var inputField = fieldType === "checkbox" || fieldType === "radio" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, fieldName.map(function (field, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "checkbox-group",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: fieldType,
      id: field,
      onChange: valueChangeHandler,
      name: labelName,
      value: field
    }), /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: field
    }, field));
  }), inputHasError && /*#__PURE__*/_react["default"].createElement("p", {
    className: "error-text"
  }, label, " must not be empty")) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-control ".concat(inputHasError ? "invalid" : "")
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: label
  }, label), fieldType === "textarea" ? /*#__PURE__*/_react["default"].createElement("textarea", {
    id: fieldName,
    onChange: valueChangeHandler,
    onBlur: inputBlurHandler,
    value: enteredValue
  }) : fieldType === "select" ? /*#__PURE__*/_react["default"].createElement("select", {
    id: fieldName,
    onChange: valueChangeHandler,
    value: enteredValue,
    name: labelName
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "",
    disabled: true
  }, "Choose an option"), fieldName.map(function (field, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: field
    }, field);
  })) : /*#__PURE__*/_react["default"].createElement("input", {
    type: inputType,
    id: fieldName,
    onChange: valueChangeHandler,
    onBlur: inputBlurHandler,
    value: enteredValue
  }), inputHasError && /*#__PURE__*/_react["default"].createElement("p", {
    className: "error-text"
  }, label, " must not be empty"));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "control-group ".concat(fieldType === "checkbox" || fieldType === "radio" ? "different-type-group" : "")
  }, fieldType === "text" || fieldType === "textarea" || fieldType === "select" || fieldName.length > 1 && /*#__PURE__*/_react["default"].createElement("label", {
    className: "different-label-group",
    htmlFor: labelName
  }, labelName), inputField);
};
var _default = exports["default"] = BasicForm;