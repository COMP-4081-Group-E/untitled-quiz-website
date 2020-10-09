import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Question from '../Components/Question';

interface Question {
  id: any,
  title: string,
  answers: string[]
}
interface Quiz {
  title?: string,
  questions: Question[]
}

const TakeQuizPage = () => {
  const [quiz, setQuiz] = useState<Quiz>({ questions: [] });
  return (
    <main>
      <h1>{quiz.title ?? <Skeleton />}</h1>
      {quiz.questions.map(question => (
        <Question {...question} />
      ))}
      <button>Submit Answers</button>
    </main>
  );
};

export default TakeQuizPage;