import __SNOWPACK_ENV__ from '../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React, { useState } from "../../web_modules/react.js";
import QuestionForm from "../Components/QuestionForm.js";
import MainLayout from "../Components/MainLayout.js";
import { Alert, Button } from '../../web_modules/react-bootstrap.js';
const {
  SNOWPACK_PUBLIC_API_URL
} = import.meta.env;

const CreateQuizPage = () => {
  const [title, setTitle] = useState();
  const [questions, setQuestions] = useState([]);
  const [link, setLink] = useState();

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const addQuestion = question => {
    setQuestions([...questions, question]);
  };

  const createQuiz = async () => {
    const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}api/quiz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        questions
      })
    });

    if (!res.ok) {
      console.error('an error occurred when creating the quiz');
      return;
    }

    setTitle('');
    setQuestions([]);
    const id = await res.json();
    setLink(`${window.location.protocol}//${window.location.hostname}/quiz/${id}`);
  };

  return /*#__PURE__*/React.createElement(MainLayout, null, link && /*#__PURE__*/React.createElement(Alert, {
    variant: "success"
  }, "Quiz at: ", link), /*#__PURE__*/React.createElement("h1", null, "Create a Quiz"), /*#__PURE__*/React.createElement("label", null, "Quiz Title:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: updateTitle
  })), /*#__PURE__*/React.createElement(QuestionForm, {
    questionNumber: questions.length + 1,
    callback: addQuestion
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "success",
    onClick: createQuiz
  }, "Create Quiz"));
};

export default CreateQuizPage;