import React, { useState } from "react"
import type { Question } from "../models/question";
import Footer from "../Components/Footer";
import QuestionForm from "../Components/QuestionForm";
import MainLayout from "../Components/MainLayout";
import { Alert, Button } from 'react-bootstrap';


const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;

const CreateQuizPage = () => {
  const [title, setTitle] = useState<string>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [link, setLink] = useState<string>();

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const addQuestion = (question: Question) => {
    setQuestions([...questions, question]);
  };

  const createQuiz = async () => {
    const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz`, {
      method: 'POST',
      body: JSON.stringify({ title, questions })
    });

    if (!res.ok) {
      console.error('an error occurred when creating the quiz');
      return;
    }


    setQuestions([]);
    const id = await res.text;
    setLink(`${window.location.protocol}//${window.location.hostname}/quiz/${id}`);
    // todo: probably don't use an alert for this in the future
    alert('Quiz created!');
  };

  return (
    <MainLayout>
      {link && (
        <Alert> Quiz at: {link}</Alert>
      )}
      <h1>Create a Quiz</h1>
      <label>
        Quiz Title:
        <input type='text' onChange={updateTitle} />
      </label>
      <QuestionForm questionNumber={questions.length + 1} callback={addQuestion} />
      <Button variant="success" onClick={createQuiz}>Create Quiz</Button>
    </MainLayout>
  )
}
export default CreateQuizPage
