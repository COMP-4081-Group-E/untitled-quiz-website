import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import QuestionResponse from '../Components/QuestionResponse';
import { useForm } from 'react-hook-form';
import { shuffle } from '../utils/shuffle';
import MainLayout from '../Components/MainLayout';
import { Button, Form } from 'react-bootstrap';

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;

const loadQuiz = async (id: any): Promise<LocalQuiz | null> => {
  if (id == 1) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
      title: 'A sample quiz',
      questions: [
        {
          key: 0,
          question: 'Which of the following statements is not a loop?',
          // todo: send client array of answers so cheating isn't easy
          answers: shuffle([
            'goto',
            'for',
            'do',
            'while'
          ])
        },
        {
          key: 1,
          question: 'What does CPU stand for?',
          // todo: send client array of answers so cheating isn't easy
          answers: shuffle([
            'Central processing unit',
            'Central programming unit',
            'Controlled progress unit',
            'Creative process unit'
          ])
        },
      ]
    };
  }

  const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}`);
  if (!res.ok) {
    return null;
  }
  // todo: check what the API returns and make sure we can just say it's a Quiz
  // also, we should shuffle the answers before returning the quiz
  return await res.json() as LocalQuiz;
};

interface LocalQuiz {
  title: string,
  questions: {
    key: any,
    question: string,
    answers: string[]
  }[]
}
interface Submission {
  [id: number]: string
}

interface TakeQuizPageProps {
  id: any
}

const TakeQuizPage: React.FunctionComponent<TakeQuizPageProps> = ({ id }) => {
  const { register, handleSubmit } = useForm<Submission>();
  const [quiz, setQuiz] = useState<LocalQuiz | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadQuiz(id).then(loadedQuiz => {
      setQuiz(loadedQuiz);
      setLoading(false);
    });
  }, []);

  const submitAnswers = async (submission: Submission) => {
    console.log('answers', submission);
    alert('Answers submitted!');
    // todo: send to API when submission endpoint added
    // const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz/${id}/submission`);
    // or something
  };

  if (quiz == null && !loading) {
    return (
      <MainLayout>
        <h1>Sorry!</h1>
        <p>The quiz you asked for couldn't be found :(</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{!loading ? quiz!.title : <Skeleton />}</h1>
      <Form onSubmit={handleSubmit(submitAnswers)}>
        {loading ? (<>
          <QuestionResponse loading={loading} />
          <QuestionResponse loading={loading} />
          <QuestionResponse loading={loading} />
          <QuestionResponse loading={loading} />
          <QuestionResponse loading={loading} />
        </>) : quiz!.questions.map(({ key, question, answers }) => (
          <QuestionResponse loading={loading} id={key} title={question} answers={answers} ref={register} key={key} />
        ))}
        <Button type='submit'>Submit Answers</Button>
      </Form>
    </MainLayout>
  );
};

export default TakeQuizPage;