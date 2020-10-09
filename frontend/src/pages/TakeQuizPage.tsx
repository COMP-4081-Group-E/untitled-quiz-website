import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Question from '../Components/Question';

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;

interface Question {
  id: any,
  title: string,
  answers: string[] // don't send the client the correct answers, to prevent cheating
}
interface Quiz {
  title?: string,
  questions: Question[]
}

const loadQuiz = async (id: any): Promise<Quiz> => {
  // todo: don't hardcode quiz
  // const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    title: 'A sample quiz',
    questions: [
      {
        id: 1,
        title: 'What color is the sky?',
        answers: [
          'Yellow',
          'Red',
          'Blue',
          'Green'
        ]
      },
      {
        id: 2,
        title: 'How many fingers am I holding up?',
        answers: [
          '3',
          '11',
          '0',
          'do thumbs count'
        ]
      }
    ]
  };
};

interface TakeQuizPageProps {
  id: any
}

const TakeQuizPage: React.FunctionComponent<TakeQuizPageProps> = ({ id }) => {
  const [quiz, setQuiz] = useState<Quiz>({ questions: [] });

  useEffect(() => {
    loadQuiz(id)
      .then(loadedQuiz => setQuiz(loadedQuiz));
  }, []);

  const submitAnswers = async () => {};

  return (
    <main>
      <h1>{quiz.title ?? <Skeleton />}</h1>
      {quiz.questions.map(question => (
        <Question {...question} />
      ))}
      <button onClick={submitAnswers}>Submit Answers</button>
    </main>
  );
};

export default TakeQuizPage;