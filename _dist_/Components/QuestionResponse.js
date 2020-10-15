import React from '../../web_modules/react.js';
import Skeleton from '../../web_modules/react-loading-skeleton.js';

const QuestionResponse = ({
  id,
  title,
  answers
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title ?? /*#__PURE__*/React.createElement(Skeleton, null)), answers?.map(answer => /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: id
  }), answer ?? /*#__PURE__*/React.createElement(Skeleton, null))));
};

export default QuestionResponse;