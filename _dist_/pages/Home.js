import React from '../../web_modules/react.js';
import { Button } from '../../web_modules/react-bootstrap.js';
import MainLayout from '../Components/MainLayout.js';

const Home = ({}) => {
  return /*#__PURE__*/React.createElement(MainLayout, null, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", null, "Welcome to Quizzl!"), /*#__PURE__*/React.createElement(Button, {
    href: "/create/quiz"
  }, "Click here to Create a Quiz")));
};

export default Home;