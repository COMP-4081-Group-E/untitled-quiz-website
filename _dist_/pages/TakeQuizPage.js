import __SNOWPACK_ENV__ from '../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React, { useEffect, useState } from '../../web_modules/react.js';
import Skeleton from '../../web_modules/react-loading-skeleton.js';
import QuestionResponse from '../Components/QuestionResponse.js';
const {
  SNOWPACK_PUBLIC_API_URL
} = import.meta.env;

const loadQuiz = async id => {
  // todo: don't hardcode quiz
  // const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}`);
  await new Promise(resolve => setTimeout(resolve, 3000));
  return {
    title: 'A sample quiz',
    questions: [{
      questionStr: 'How many fingers am I holding up?',
      // todo: send client array of answers so cheating isn't easy
      correctAnswer: '3',
      incorrectAnswer: '11',
      incorrectAnswer2: '0',
      incorrectAnswer3: 'do thumbs count'
    }, {
      questionStr: 'What color is the sky?',
      // todo: send client array of answers so cheating isn't easy
      correctAnswer: 'Yellow',
      incorrectAnswer: 'Red',
      incorrectAnswer2: 'Blue',
      incorrectAnswer3: 'Green'
    }]
  };
};

const TakeQuizPage = ({
  id
}) => {
  const [quiz, setQuiz] = useState({
    questions: []
  });
  useEffect(() => {
    loadQuiz(id).then(loadedQuiz => setQuiz(loadedQuiz));
  }, []);

  const submitAnswers = async () => {};

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, quiz.title ?? /*#__PURE__*/React.createElement(Skeleton, null)), quiz.questions.map(question => /*#__PURE__*/React.createElement(QuestionResponse, {
    title: question.questionStr,
    answers: [question.correctAnswer, question.incorrectAnswer, question.incorrectAnswer2, question.incorrectAnswer3]
  })), /*#__PURE__*/React.createElement("button", {
    onClick: submitAnswers
  }, "Submit Answers"));
};

export default TakeQuizPage;