import { One } from "../../one";

export class TwoWayBindingExample extends One {
  static tag = "x-two-way-binding-example";
  deps = {
    [Child.tag]: Child,
  };
  render() {
    return `<${Child.tag}
  :child-prop="parentProp"
  ::two-way="parentProp2Way"
></${Child.tag}>`;
  }

  parentProp = "parent value";
  parentProp2Way = "parent value 2 way";
}

class Child extends One {
  static tag = "x-child";

  childProp = "default value";
  twoWay = "default value";

  change() {
    this.childProp = this.childProp + "+";
    this.twoWay = this.twoWay + "+";
  }

  render() {
    return `
<div -text="childProp"></div>
<div -text="twoWay"></div>
<button @click="change">Change</button>
`;
  }
}
