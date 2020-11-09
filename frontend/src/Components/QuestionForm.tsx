import React from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import type { Question } from "../models/question";
import styles from './QuestionForm.module.css';
import { Button, Form } from 'react-bootstrap';

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
    <Form className={styles.input} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Question {questionNumber}:</Form.Label>
        <Form.Control type="text" name="questionStr" ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Correct Answer:</Form.Label>
        <Form.Control type="text" name="correctAnswer" ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Incorrect Answer</Form.Label>
        <Form.Control type="text" name="incorrectAnswer" ref={register} />
        <Form.Label>Incorrect Answer</Form.Label>
        <Form.Control type="text" name="incorrectAnswer2" ref={register} />
        <Form.Label>Incorrect Answer</Form.Label>
        <Form.Control type="text" name="incorrectAnswer3" ref={register} />
      </Form.Group>
      <Button type="submit">Next Question</Button>
    </Form>
  );
}

export default QuestionForm;