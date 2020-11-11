import React from '../../web_modules/react.js';
import { Col, Container, Row } from '../../web_modules/react-bootstrap.js';
import Footer from './Footer.js';
import Header from './Header.js';

const MainLayout = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Container, {
    fluid: true
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, children)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Footer, null)))));
};

export default MainLayout;