import { One } from "../../one";

export class SlotExample extends One {
  static tag = "x-slot-example";

  deps = {
    [SlotParent.tag]: SlotParent,
  };

  render() {
    return `<${SlotParent.tag}> This is a child.  </${SlotParent.tag}>`;
  }
}

class SlotParent extends One {
  static tag = "x-slot-parent";
  render() {
    return `
<div>
  (start of slot)<slot></slot>(end of slot)
</div>
`;
  }
}
