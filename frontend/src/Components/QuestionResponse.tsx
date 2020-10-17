import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface QuestionProps {
  id?: any,
  title: string,
  answers: string[],
}

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

const QuestionResponse = React.forwardRef<HTMLInputElement, QuestionProps>(({ id, title, answers }, ref) => {
  if (!answers.length) {
    return <SkeletonResponse />;
  }

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

export default QuestionResponse;