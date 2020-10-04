import React, { useState } from "react"
import Footer from "../Components/Footer";
import QuestionForm, { Question } from "../Components/QuestionForm";

const { SNOWPACK_PUBLIC_API_URL } = import.meta.env;

const CreateQuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
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
    <React.Fragment>
      <QuestionForm questionNumber={questions.length + 1} callback={addQuestion} />
      <button onClick={createQuiz}>Create Quiz</button>
      <Footer/>
    </ React.Fragment >
  )
}
export default CreateQuizPage
