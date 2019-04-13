import { html, render } from "./web_modules/lit-html.js";

const FreshAsApp = title =>
  html`
    <h1>${title}</h1>
  `;

render(FreshAsApp("FreshAs"), document.getElementById("FreshAs"));
