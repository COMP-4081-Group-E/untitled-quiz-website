import React from "../../web_modules/react.js";
import styles from './Footer.module.css.proxy.js';

const Footer = () => {
  return /*#__PURE__*/React.createElement("footer", {
    className: styles.footer
  }, /*#__PURE__*/React.createElement("a", {
    className: styles.ex1,
    href: "",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    className: styles.twitter,
    src: "../Images/twitter.png",
    alt: "Twitter"
  })), /*#__PURE__*/React.createElement("a", {
    className: styles.ex4,
    href: "",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    className: styles.linkedIn,
    src: "../Images/linkedIn.png",
    alt: "LinkedIn"
  })), /*#__PURE__*/React.createElement("a", {
    className: styles.ex3,
    href: "",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    className: styles.gitHub,
    src: "../Images/github.png",
    alt: "GitHub"
  })), /*#__PURE__*/React.createElement("a", {
    className: styles.ex2,
    href: "",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    className: styles.instagram,
    src: "../Images/instagram.png",
    alt: "Instagram"
  })));
};

export default Footer;