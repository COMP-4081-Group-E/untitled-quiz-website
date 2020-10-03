import React from "react"
import { useForm } from "react-hook-form";
import styles from './QuestionForm.module.css';

type Inputs = {
  questionStr: string,
  correctAnswer: string,
  incorrectAnswer: string,
  incorrectAnswer2: string,
  incorrectAnswer3: string
};

export interface Question {
  questionStr: string,
  correctAnswer: string,
  incorrectAnswer: string,
  incorrectAnswer2: string,
  incorrectAnswer3: string
}

interface QuestionFormProps {
  callback: (question: Question) => (void | Promise<void>);
  questionNumber: number;
}

const QuestionForm: React.FunctionComponent<QuestionFormProps> = ({ callback, questionNumber }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form className = {styles.input} onSubmit={handleSubmit(callback)}>
      <h1>Create a Quiz</h1>
      <label >Question {questionNumber}:</label>
      <input type= "text" name="questionStr" ref={register} />
      <label >Correct Answer:</label>
      <input type= "text" name="correctAnswer" ref={register} />
      <label >Incorrect Answer</label>
      <input type= "text" name="incorrectAnswer" ref={register} />
      <label >Incorrect Answer</label>
      <input type= "text" name="incorrectAnswer2" ref={register} />
      <label >Incorrect Answer</label>
      <input type= "text" name="incorrectAnswer3" ref={register} />

      <input type="submit" value="Next Question" />
    </form>
  );
}

export default QuestionForm;