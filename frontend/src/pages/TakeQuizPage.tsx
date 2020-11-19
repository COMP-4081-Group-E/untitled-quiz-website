import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import QuestionResponse from '../Components/QuestionResponse';
import { useForm } from 'react-hook-form';
import { shuffle } from '../utils/shuffle';
import MainLayout from '../Components/MainLayout';
import { Button, Form } from 'react-bootstrap';

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;

const loadQuiz = async (id: any): Promise<LoadedQuiz | null> => {
  const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}`);
  if (!res.ok) {
    return null;
  }

  return await res.json() as LoadedQuiz;
};

interface QuizDetails {
  quizId: string,
  quizTitle: string
}
interface QuestionPrompt {
  question: string,
  answers: string[]
}
interface Submission {
  [id: number]: string
}
type LoadedQuiz = QuizDetails & {
  questions: {
    question: string,
    correctAnswer: string,
    incorrect: string[]
  }[]
};

interface TakeQuizPageProps {
  id: any
}

const TakeQuizPage: React.FunctionComponent<TakeQuizPageProps> = ({ id }) => {
  const { register, handleSubmit } = useForm<Submission>();
  const [quizDetails, setQuizDetails] = useState<QuizDetails | null>(null);
  const [questions, setQuestions] = useState<QuestionPrompt[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadQuiz(id).then(loadedQuiz => {
      setQuizDetails({
        quizId: loadedQuiz!.quizId,
        quizTitle: loadedQuiz!.quizTitle
      });
      setQuestions(loadedQuiz!.questions.map(q => ({
        question: q.question,
        answers: shuffle([q.correctAnswer, ...q.incorrect])
      })));
      setLoading(false);
    });
  }, []);

  const submitAnswers = async (submission: Submission) => {
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
    return (
      <MainLayout>
        <h1>Sorry!</h1>
        <p>The quiz you asked for couldn't be found :(</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{!loading ? quizDetails!.quizTitle : <Skeleton />}</h1>
      <Form onSubmit={handleSubmit(submitAnswers)}>
        {loading ? (<>
          <QuestionResponse loading={loading} />
          <QuestionResponse loading={loading} />
          <QuestionResponse loading={loading} />
          <QuestionResponse loading={loading} />
          <QuestionResponse loading={loading} />
        </>) : questions.map(({ question, answers }, key) => (
          <QuestionResponse loading={loading} id={key} title={question} answers={answers} ref={register} key={key} />
        ))}
        <Button type='submit'>Submit Answers</Button>
      </Form>
    </MainLayout>
  );
};

export default TakeQuizPage;