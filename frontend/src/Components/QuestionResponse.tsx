import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface QuestionProps {
  id?: any,
  title?: string,
  answers?: string[],
}

const QuestionResponse = React.forwardRef<HTMLInputElement, QuestionProps>(({ id, title, answers }, ref) => {
  return (
    <div>
      <h2>{title ?? <Skeleton />}</h2>
      {answers?.map((answer, i) => {
        if (!answer) {
          return <Skeleton key={`${id}-${i}`} />;
        }
        return (
          <label key={`${id}-${i}`}>
            <input type='radio' name={id} value={answer} ref={ref} />
            {answer}
          </label>
        );
      })}
    </div>
  );
});

export default QuestionResponse;