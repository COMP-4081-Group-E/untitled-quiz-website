function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../web_modules/react.js';
import Skeleton from '../../web_modules/react-loading-skeleton.js';

const SkeletonResponse = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Skeleton, null), /*#__PURE__*/React.createElement(Skeleton, null), /*#__PURE__*/React.createElement(Skeleton, null), /*#__PURE__*/React.createElement(Skeleton, null));
};

const Response = /*#__PURE__*/React.forwardRef(({
  id,
  title,
  answers
}, ref) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title), answers.map((answer, i) => /*#__PURE__*/React.createElement("label", {
    "data-key": `${id}-${i}`,
    key: `${id}-${i}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: id,
    value: answer,
    ref: ref
  }), answer)));
});
const QuestionResponse = /*#__PURE__*/React.forwardRef((props, ref) => {
  if (props.loading) {
    return /*#__PURE__*/React.createElement(SkeletonResponse, null);
  }

  return /*#__PURE__*/React.createElement(Response, _extends({}, props, {
    ref: ref
  }));
});
export default QuestionResponse;