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
  if (id == 1) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
      title: 'A sample quiz',
      questions: [{
        key: 0,
        question: 'Which of the following statements is not a loop?',
        // todo: send client array of answers so cheating isn't easy
        answers: shuffle(['goto', 'for', 'do', 'while'])
      }, {
        key: 1,
        question: 'What does CPU stand for?',
        // todo: send client array of answers so cheating isn't easy
        answers: shuffle(['Central processing unit', 'Central programming unit', 'Controlled progress unit', 'Creative process unit'])
      }]
    };
  }

  const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}`);

  if (!res.ok) {
    return null;
  } // todo: check what the API returns and make sure we can just say it's a Quiz
  // also, we should shuffle the answers before returning the quiz


  return await res.json();
};

const TakeQuizPage = ({
  id
}) => {
  const {
    register,
    handleSubmit
  } = useForm();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadQuiz(id).then(loadedQuiz => {
      setQuiz(loadedQuiz);
      setLoading(false);
    });
  }, []);

  const submitAnswers = async submission => {
    console.log('answers', submission);
    alert('Answers submitted!'); // todo: send to API when submission endpoint added
    // const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}/submission`);
    // or something
  };

  if (quiz == null && !loading) {
    return /*#__PURE__*/React.createElement(MainLayout, null, /*#__PURE__*/React.createElement("h1", null, "Sorry!"), /*#__PURE__*/React.createElement("p", null, "The quiz you asked for couldn't be found :("));
  }

  return /*#__PURE__*/React.createElement(MainLayout, null, /*#__PURE__*/React.createElement("h1", null, !loading ? quiz.title : /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Form, {
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
  })) : quiz.questions.map(({
    key,
    question,
    answers
  }) => /*#__PURE__*/React.createElement(QuestionResponse, {
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