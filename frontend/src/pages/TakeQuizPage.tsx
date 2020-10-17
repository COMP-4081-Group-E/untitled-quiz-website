import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import type { Quiz } from '../models/quiz';
import QuestionResponse from '../Components/QuestionResponse';
import { useForm } from 'react-hook-form';

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;

const loadQuiz = async (id: any): Promise<Quiz | null> => {
  if (id == 1) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
      title: 'A sample quiz',
      questions: [
        {
          questionStr: 'Which of the following statements is not a loop?',
          // todo: send client array of answers so cheating isn't easy
          correctAnswer: 'goto',
          incorrectAnswer: 'for',
          incorrectAnswer2: 'do',
          incorrectAnswer3: 'while'
        },
        {
          questionStr: 'What does CPU stand for?',
          // todo: send client array of answers so cheating isn't easy
          correctAnswer: 'Central processing unit',
          incorrectAnswer: 'Central programming unit',
          incorrectAnswer2: 'Controlled progress unit',
          incorrectAnswer3: 'Creative process unit'
        },
      ]
    };
  }

  const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}`);
  if (!res.ok) {
    return null;
  }
  // todo: check what the API returns and make sure we can just say it's a Quiz
  return await res.json() as Quiz;
};

interface Submission {
  [id: number]: string
}

interface TakeQuizPageProps {
  id: any
}

const TakeQuizPage: React.FunctionComponent<TakeQuizPageProps> = ({ id }) => {
  const { register, handleSubmit } = useForm<Submission>();
  const [quiz, setQuiz] = useState<Quiz | null>({
    questions: Array(5).fill({
      questionStr: null,
      correctAnswer: null,
      incorrectAnswer: null,
      incorrectAnswer2: null,
      incorrectAnswer3: null
    })
  });

  useEffect(() => {
    loadQuiz(id)
      .then(loadedQuiz => setQuiz(loadedQuiz));
  }, []);

  const submitAnswers = async (submission: Submission) => {
    console.log('answers', submission);
    alert('Answers submitted!');
    // todo: send to API when submission endpoint added
    // const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}/submission`);
    // or something
  };

  if (!quiz) {
    return (
      <main>
        <h1>Sorry!</h1>
        <p>The quiz you asked for couldn't be found :(</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{quiz.title ?? <Skeleton />}</h1>
      <form onSubmit={handleSubmit(submitAnswers)}>
        {quiz.questions.map((question, i) => (
          <QuestionResponse id={i} title={question.questionStr} answers={[
            question.correctAnswer,
            question.incorrectAnswer,
            question.incorrectAnswer2,
            question.incorrectAnswer3
          ]} ref={register} key={i} />
        ))}
        <button>Submit Answers</button>
      </form>
    </main>
  );
};

export default TakeQuizPage;