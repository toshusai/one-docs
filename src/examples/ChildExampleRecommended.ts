import { One } from "../../one";

export class ChildExampleRecommended extends One {
  static tag = "x-child-example-recommended";
  deps = {
    [Child.tag]: Child,
  };

  render() {
    return `
<div>ParentComponent</div>
<${Child.tag}></${Child.tag}>
`;
  }
}

class Child extends One {
  static tag = "x-child";
  render() {
    return `<div>ChildComponent</div>`;
  }
}
