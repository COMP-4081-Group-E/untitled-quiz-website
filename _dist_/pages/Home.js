import React from '../../web_modules/react.js';
import { Link } from '../../web_modules/react-router-dom.js';
import styles from './Home.module.css.proxy.js';

const Home = ({}) => {
  return /*#__PURE__*/React.createElement("main", {
    className: styles.app
  }, /*#__PURE__*/React.createElement("h1", null, "Welcome to Quizzl!"), /*#__PURE__*/React.createElement(Link, {
    to: "/create/quiz"
  }, "Click here to Create a Quiz"));
};

export default Home;