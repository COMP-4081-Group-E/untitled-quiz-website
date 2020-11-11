import React from 'react';
import { Form } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

interface ResponseProps {
  id: any,
  title: string,
  answers: string[],
}
type QuestionResponseProps = {
  loading: true
} | (ResponseProps & {
  loading: false | undefined | null
});

const SkeletonResponse = () => {
  return (
    <Form.Group>
      <Form.Label><Skeleton /></Form.Label>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Form.Group>
  );
};

const Response = React.forwardRef<HTMLInputElement, ResponseProps>(({ id, title, answers }, ref) => {
  return (
    <Form.Group>
      <Form.Label>{title}</Form.Label>
      {answers.map((answer, i) => (
        // <label data-key={`${id}-${i}`} key={`${id}-${i}`}>
        //   <input type='radio' name={id} value={answer} ref={ref} />
        //   {answer}
        // </label>
        <Form.Check
          type='radio'
          name={id}
          label={answer}
          value={answer}
          id={`${id}-${i}`}
          key={`${id}-${i}`}
          ref={ref}
        />
      ))}
    </Form.Group>
  );
});

const QuestionResponse = React.forwardRef<HTMLInputElement, QuestionResponseProps>((props, ref) => {
  if (props.loading) {
    return <SkeletonResponse />;
  }

  return <Response {...props} ref={ref} />;
});

export default QuestionResponse;