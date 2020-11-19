import __SNOWPACK_ENV__ from '../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React, { useEffect, useState } from '../../web_modules/react.js';
import Skeleton from '../../web_modules/react-loading-skeleton.js';
import QuestionResponse from '../Components/QuestionResponse.js';
import { useForm } from '../../web_modules/react-hook-form.js';
import { shuffle } from '../utils/shuffle.js';
import MainLayout from '../Components/MainLayout.js';
import { Button, Form } from '../../web_modules/react-bootstrap.js';
const {
  SNOWPACK_PUBLIC_API_URL
} = import.meta.env;

const loadQuiz = async id => {
  const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}`);

  if (!res.ok) {
    return null;
  }

  return await res.json();
};

const TakeQuizPage = ({
  id
}) => {
  const {
    register,
    handleSubmit
  } = useForm();
  const [quizDetails, setQuizDetails] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadQuiz(id).then(loadedQuiz => {
      setQuizDetails({
        quizId: loadedQuiz.quizId,
        quizTitle: loadedQuiz.quizTitle
      });
      setQuestions(loadedQuiz.questions.map(q => ({
        question: q.question,
        answers: shuffle([q.correctAnswer, ...q.incorrect])
      })));
      setLoading(false);
    });
  }, []);

  const submitAnswers = async submission => {
    console.log('answers', submission);
    const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}api/submission`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quizId: id,
        answers: submission
      })
    });
    const grade = Number(await res.text());
    alert(`Answers submitted! You got ${grade * 100}% correct!`);
    window.location.href = '/';
  };

  if (quizDetails == null && !loading) {
    return /*#__PURE__*/React.createElement(MainLayout, null, /*#__PURE__*/React.createElement("h1", null, "Sorry!"), /*#__PURE__*/React.createElement("p", null, "The quiz you asked for couldn't be found :("));
  }

  return /*#__PURE__*/React.createElement(MainLayout, null, /*#__PURE__*/React.createElement("h1", null, !loading ? quizDetails.quizTitle : /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Form, {
    onSubmit: handleSubmit(submitAnswers)
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(QuestionResponse, {
    loading: loading
  }), /*#__PURE__*/React.createElement(QuestionResponse, {
    loading: loading
  }), /*#__PURE__*/React.createElement(QuestionResponse, {
    loading: loading
  }), /*#__PURE__*/React.createElement(QuestionResponse, {
    loading: loading
  }), /*#__PURE__*/React.createElement(QuestionResponse, {
    loading: loading
  })) : questions.map(({
    question,
    answers
  }, key) => /*#__PURE__*/React.createElement(QuestionResponse, {
    loading: loading,
    id: key,
    title: question,
    answers: answers,
    ref: register,
    key: key
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Submit Answers")));
};

export default TakeQuizPage;