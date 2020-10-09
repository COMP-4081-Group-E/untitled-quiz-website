import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface QuestionProps {
  id?: any,
  title?: string,
  answers?: string[]
}

const Question: React.FunctionComponent<QuestionProps> = ({ id, title, answers }) => {
  return (
    <div>
      <h2>{title ?? <Skeleton />}</h2>
      {answers?.map(answer => (
        <label>
          <input type='radio' name={id} />
          {answer ?? <Skeleton />}
        </label>
      ))}
    </div>
  );
};

export default Question;