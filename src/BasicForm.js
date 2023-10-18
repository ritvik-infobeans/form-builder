import React from "react";
import useInput from "./use-input";
import "./style.css";
const BasicForm = ({ data, validate, onFormChange, isFormSubmitted }) => {
  const { fieldName, fieldType, inputType, labelName } = data;

  const isFieldValid = (value) => {
    if (!validate) {
      return true;
    }
    switch (fieldType) {
      case "text":
      case "textarea":
        return value.trim().length >= 8;
      case "email":
        return /^[a-zA-Z0-9._%+-]+@[a-zAZ.-]+\.[a-zA-Z]{2,}$/.test(
          value.trim()
        );
      case "password":
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      case "select":
      case "checkbox":
      case "radio":
        return value.trim().length > 0;
      default:
        return false;
    }
  };

  const {
    value: enteredValue,
    hasError: inputHasError,
    valueChangeHandler,
    inputBlurHandler,
  } = useInput(
    isFieldValid,
    onFormChange,
    fieldType === "checkbox" || fieldType === "radio" || fieldType === "select"
      ? labelName
      : fieldName[0],
    isFormSubmitted
  );

  const label =
    fieldType === "text" || fieldType === "textarea" ? fieldName[0] : labelName;

  const inputField =
    fieldType === "checkbox" || fieldType === "radio" ? (
      <>
        {fieldName.map((field, index) => (
          <div className="checkbox-group" key={index}>
            <input
              type={fieldType}
              id={field}
              onChange={valueChangeHandler}
              name={labelName}
              value={field}
            />
            <label htmlFor={field}>{field}</label>
          </div>
        ))}
        {inputHasError && (
          <p className="error-text">{label} must not be empty</p>
        )}
      </>
    ) : (
      <div className={`form-control ${inputHasError ? "invalid" : ""}`}>
        {label && <label htmlFor={label}>{label}</label>}
        {fieldType === "textarea" ? (
          <textarea
            id={fieldName}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
            value={enteredValue}
          />
        ) : fieldType === "select" ? (
          <select
            id={fieldName}
            onChange={valueChangeHandler}
            value={enteredValue}
            name={labelName}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {fieldName.map((field, index) => (
              <option key={index} value={field}>
                {field}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={inputType}
            id={fieldName}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
            value={enteredValue}
          />
        )}
        {inputHasError && (
          <p className="error-text">{label} must not be empty</p>
        )}
      </div>
    );

  return (
    <div
      className={`control-group ${
        fieldType === "checkbox" || fieldType === "radio"
          ? "different-type-group"
          : ""
      }`}
    >
      {fieldType === "text" ||
        fieldType === "textarea" ||
        fieldType === "select" ||
        (fieldName.length > 1 && (
          <label className="different-label-group" htmlFor={labelName}>
            {labelName}
          </label>
        ))}
      {inputField}
    </div>
  );
};

export default BasicForm;
