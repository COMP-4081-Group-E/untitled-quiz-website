import __SNOWPACK_ENV__ from '../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React, { useState } from "../../web_modules/react.js";
import Footer from "../Components/Footer.js";
import QuestionForm from "../Components/QuestionForm.js";
const {
  SNOWPACK_PUBLIC_API_URL
} = import.meta.env;

const CreateQuizPage = () => {
  const [title, setTitle] = useState();
  const [questions, setQuestions] = useState([]);

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const addQuestion = question => {
    setQuestions([...questions, question]);
  };

  const createQuiz = async () => {
    const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        questions
      })
    });

    if (!res.ok) {
      console.error('an error occurred when creating the quiz');
      return;
    }

    setQuestions([]); // todo: probably don't use an alert for this in the future

    alert('Quiz created!');
  };

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Create a Quiz"), /*#__PURE__*/React.createElement("label", null, "Title:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: updateTitle
  })), /*#__PURE__*/React.createElement(QuestionForm, {
    questionNumber: questions.length + 1,
    callback: addQuestion
  }), /*#__PURE__*/React.createElement("button", {
    onClick: createQuiz
  }, "Create Quiz"), /*#__PURE__*/React.createElement(Footer, null));
};

export default CreateQuizPage;