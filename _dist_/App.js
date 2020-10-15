import React from '../web_modules/react.js';
import { Route, Switch } from '../web_modules/react-router-dom.js';
import Home from './pages/Home.js';
import CreateQuizPage from './pages/CreateQuizPage.js';
import TakeQuizPage from './pages/TakeQuizPage.js';

const App = ({}) => {
  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React.createElement(Home, null)), /*#__PURE__*/React.createElement(Route, {
    path: "/create/quiz"
  }, /*#__PURE__*/React.createElement(CreateQuizPage, null)), /*#__PURE__*/React.createElement(Route, {
    path: "/quiz/:id"
  }, ({
    match
  }) => /*#__PURE__*/React.createElement(TakeQuizPage, {
    id: match?.params.id
  })));
};

export default App;