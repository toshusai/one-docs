import { One } from "../../one";

export class MultipleSlotsExample extends One {
  static tag = "x-multiple-slots-example";

  deps = {
    [SlotParent.tag]: SlotParent,
  };

  render() {
    return `
<example-slot-parent>
  This is a normal child by tpl.
  <tpl-second>This is second slot.</tpl-second>
</example-slot-parent>
`;
  }
}

export class SlotParent extends One {
  static tag = "example-slot-parent";
  render() {
    return `
<div>
  <div>
    (start of slot)<slot></slot>(end of slot)
  </div>
  <div>
    (start of slot-second)<slot-second></slot-second>(end of slot-second)
  </div>
</div>
`;
  }
}
