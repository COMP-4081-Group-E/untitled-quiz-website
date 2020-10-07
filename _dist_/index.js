import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from '../web_modules/react.js';
import { render } from '../web_modules/react-dom.js';
import { BrowserRouter } from '../web_modules/react-router-dom.js';
import App from './App.js';
render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(App, null))), document.getElementById('root')); // Hot Module Replacement (HMR)
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (import.meta.hot) {
  import.meta.hot.accept();
}