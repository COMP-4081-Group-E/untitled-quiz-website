import React from 'react';
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
    <div>
      <h2><Skeleton /></h2>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

const Response = React.forwardRef<HTMLInputElement, ResponseProps>(({ id, title, answers }, ref) => {
  return (
    <div>
      <h2>{title}</h2>
      {answers.map((answer, i) => (
        <label data-key={`${id}-${i}`} key={`${id}-${i}`}>
          <input type='radio' name={id} value={answer} ref={ref} />
          {answer}
        </label>
      ))}
    </div>
  );
});

const QuestionResponse = React.forwardRef<HTMLInputElement, QuestionResponseProps>((props, ref) => {
  if (props.loading) {
    return <SkeletonResponse />;
  }

  return <Response {...props} ref={ref} />;
});

export default QuestionResponse;