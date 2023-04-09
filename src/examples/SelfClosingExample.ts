import { One } from "../../one";

export class SelfClosingExample extends One {
  static tag = "x-self-closing-example";
  deps: Record<string, typeof One> = {
    ["x-child"]: Child,
  };

  render() {
    return `
<div>SelfClosingExample</div>
<x-child/>
<div>THIS IS NOT VISIBLE!!!!</div>
`;
  }
}

class Child extends One {
  render() {
    return `<div>ChildComponent</div>`;
  }
}
