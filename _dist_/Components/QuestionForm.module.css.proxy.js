
export let code = "/* Style inputs */\ninput[type=text], select {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n  }\n  \n  /* Style the submit button */\n  input[type=submit] {\n    width: 100%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  /* Add a background color to the submit button on mouse-over */\n  input[type=submit]:hover {\n    background-color: #45a049;\n  }";
let json = {};
export default json;

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);