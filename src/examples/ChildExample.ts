import { One } from "../../one";

export class ChildExample extends One {
  static tag = "x-child-example";
  deps = {
    ["x-child"]: Child,
  };

  render() {
    return `
<div>ParentComponent</div>
<x-child></x-child>
`;
  }
}

class Child extends One {
  render() {
    return `<div>ChildComponent</div>`;
  }
}
