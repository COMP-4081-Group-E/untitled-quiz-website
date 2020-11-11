import React from '../../web_modules/react.js';
import { Button, Navbar } from '../../web_modules/react-bootstrap.js';

const Header = () => {
  return /*#__PURE__*/React.createElement(Navbar, null, /*#__PURE__*/React.createElement(Navbar.Brand, {
    href: "/"
  }, "Quizzl"), /*#__PURE__*/React.createElement(Navbar.Toggle, null), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    className: "justify-content-end"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "/create/quiz"
  }, "Create a Quiz")));
};

export default Header;