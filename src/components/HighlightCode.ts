import { One } from "../../one";
import hljs from "highlight.js/lib/core";


export class HighlightCode extends One {
  static tag = "x-highlight-code";
  lang = "typescript";
  code = "";
  render() {
    return `
<pre><code class="code language-typescript" -text="code"></code></pre>`;
  }
  mounted() {
    this.els[1].querySelector("code")!.className = `code language-${this.lang}`;
    hljs.highlightElement(this.els[1].querySelector("code")!);
  }
}
