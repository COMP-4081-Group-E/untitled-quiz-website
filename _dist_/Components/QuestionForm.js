import React from "../../web_modules/react.js";
import { useForm } from "../../web_modules/react-hook-form.js";
import styles from './QuestionForm.module.css.proxy.js';
import { Button, Form } from '../../web_modules/react-bootstrap.js';
import Col from '../../web_modules/react-bootstrap/Col.js';

const QuestionForm = ({
  callback,
  questionNumber
}) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = question => {
    callback(question);
    reset();
  };

  return /*#__PURE__*/React.createElement(Form, {
    className: styles.input,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement(Form.Label, null, "Question ", questionNumber, ":"), /*#__PURE__*/React.createElement(Form.Control, {
    size: "sm",
    type: "text",
    name: "questionStr",
    ref: register
  }), /*#__PURE__*/React.createElement(Form.Label, null, "Correct Answer:"), /*#__PURE__*/React.createElement(Form.Control, {
    size: "sm",
    type: "text",
    name: "correctAnswer",
    ref: register
  }), /*#__PURE__*/React.createElement(Form.Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Form.Label, null, "Incorrect Answer:"), /*#__PURE__*/React.createElement(Form.Control, {
    size: "sm",
    type: "text",
    name: "incorrectAnswer",
    ref: register
  })), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Form.Label, null, "Incorrect Answer:"), /*#__PURE__*/React.createElement(Form.Control, {
    size: "sm",
    type: "text",
    name: "incorrectAnswer2",
    ref: register
  })), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Form.Label, null, "Incorrect Answer:"), /*#__PURE__*/React.createElement(Form.Control, {
    size: "sm",
    type: "text",
    name: "incorrectAnswer3",
    ref: register
  }))), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Next Question"));
};

export default QuestionForm;