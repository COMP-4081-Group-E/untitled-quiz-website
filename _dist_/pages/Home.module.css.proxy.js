
export let code = "._dist_pages_Home_module__app h1 {\n  color: blue;\n  font-style: italic;\n}";
let json = {"app":"_dist_pages_Home_module__app"};
export default json;

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);