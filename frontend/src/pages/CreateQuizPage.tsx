import React, { useState } from "react"
import type { Question } from "../models/question";
import Footer from "../Components/Footer";
import QuestionForm from "../Components/QuestionForm";

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;

const CreateQuizPage = () => {
  const [title, setTitle] = useState<string>();
  const [questions, setQuestions] = useState<Question[]>([]);

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const addQuestion = (question: Question) => {
    setQuestions([...questions, question]);
  };

  const createQuiz = async () => {
    const res = await fetch(`${SNOWPACK_PUBLIC_API_URL}/api/quiz`, {
      method: 'POST',
      body: JSON.stringify(questions)
    });

    if (!res.ok) {
      console.error('an error occurred when creating the quiz');
      return;
    }

    setQuestions([]);
    // todo: probably don't use an alert for this in the future
    alert('Quiz created!');
  };

  return (
    <main>
      <h1>Create a Quiz</h1>
      <label>
        Title:
        <input type='text' onChange={updateTitle} />
      </label>
      <QuestionForm questionNumber={questions.length + 1} callback={addQuestion} />
      <button onClick={createQuiz}>Create Quiz</button>
      <Footer/>
    </main>
  )
}
export default CreateQuizPage
