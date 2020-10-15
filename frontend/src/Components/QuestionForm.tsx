import React from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import type { Question } from "../models/question";
import styles from './QuestionForm.module.css';

interface QuestionFormProps {
  callback: (question: Question) => (void | Promise<void>);
  questionNumber: number;
}

const QuestionForm: React.FunctionComponent<QuestionFormProps> = ({ callback, questionNumber }) => {
  const { register, handleSubmit, reset } = useForm<Question>();
  const onSubmit: SubmitHandler<Question> = (question: Question) => {
    callback(question);
    reset();
  };

  return (
    <form className={styles.input} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Question {questionNumber}:
        <input type="text" name="questionStr" ref={register} />
      </label>
      <label>
        Correct Answer:
        <input type="text" name="correctAnswer" ref={register} />
      </label>
      <label>
        Incorrect Answer
        <input type="text" name="incorrectAnswer" ref={register} />
      </label>
      <label>
        Incorrect Answer
        <input type="text" name="incorrectAnswer2" ref={register} />
      </label>
      <label>
        Incorrect Answer
        <input type="text" name="incorrectAnswer3" ref={register} />
      </label>
      <input type="submit" value="Next Question" />
    </form>
  );
}

export default QuestionForm;