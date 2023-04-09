import { Page } from "./Page";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

import "highlight.js/styles/github-dark.css";
import "./styles/main.css";

(() => {
  document.addEventListener("DOMContentLoaded", (event) => {
    const page = new Page();

    var appElement = document.getElementById("app");
    if (!appElement) {
      throw new Error("No app element found");
    }
    page.mount(appElement);
    hljs.configure({
      ignoreUnescapedHTML: true,
    });

    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  });
})();
