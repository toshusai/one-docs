import { One } from "../../one";

export class ComponentEventExample extends One {
  static tag = "x-component-event-example";
  deps = {
    [Child.tag]: Child,
  };
  render() {
    //                    v(1)          v(2)         v(3)     v(4)
    return `<${Child.tag} :child-prop="parentProp" @update="updateMethod"></${Child.tag}>`;
  }

  // v(2)
  parentProp = "parent value";

  // v(4)
  updateMethod(value: string) {
    this.parentProp = value;
  }
}

class Child extends One {
  static tag = "x-child";

  // v(1)
  childProp = "default value";

  change() {
    //         v(3)
    this.emit("update", this.childProp + "+");
  }

  render() {
    return `
<div -text="childProp"></div>
<button @click="change">Change</button>
`;
  }
}
