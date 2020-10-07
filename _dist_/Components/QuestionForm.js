import React from "../../web_modules/react.js";
import { useForm } from "../../web_modules/react-hook-form.js";
import styles from './QuestionForm.module.css.proxy.js';

const QuestionForm = ({
  callback,
  questionNumber
}) => {
  const {
    register,
    handleSubmit
  } = useForm();
  return /*#__PURE__*/React.createElement("form", {
    className: styles.input,
    onSubmit: handleSubmit(callback)
  }, /*#__PURE__*/React.createElement("h1", null, "Create a Quiz"), /*#__PURE__*/React.createElement("label", null, "Question ", questionNumber, ":"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "questionStr",
    ref: register
  }), /*#__PURE__*/React.createElement("label", null, "Correct Answer:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "correctAnswer",
    ref: register
  }), /*#__PURE__*/React.createElement("label", null, "Incorrect Answer"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "incorrectAnswer",
    ref: register
  }), /*#__PURE__*/React.createElement("label", null, "Incorrect Answer"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "incorrectAnswer2",
    ref: register
  }), /*#__PURE__*/React.createElement("label", null, "Incorrect Answer"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "incorrectAnswer3",
    ref: register
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Next Question"
  }));
};

export default QuestionForm;