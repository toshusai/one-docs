import { One } from "../../one";
import { HighlightCode } from "../components/HighlightCode";

export class CodeAndDemo extends One {
  static tag = "code-and-demo";
  render() {
    return `
<div class="preview">
  <slot2></slot2>
  <highlight-code :lang="lang" :code="code"></highlight-code>
  <div class="preview-box">
    <div class="demo">DEMO</div>
    <slot></slot>
  </div>
</div>
`;
  }
  public deps = {
    "highlight-code": HighlightCode,
  };
  code = "";
  lang = "typescript";
}
