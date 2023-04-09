/**
 * @jest-environment jsdom
 */

import { One } from "../one";

class SlotTest extends One {
  render() {
    return `
<has-slot>
  <span id="slot">Hello world!</span>
</has-slot>
`;
  }
  deps = {
    "has-slot": HasSlot,
  };
}

class HasSlot extends One {
  render() {
    return `
<a>
  <slot></slot>
</a>
`;
  }
}

test("test slot", () => {
  document.body.innerHTML = `<div id="app"></div>`;
  const testComponent = new SlotTest();
  testComponent.mount(document.getElementById("app")!);
  var slot = document.getElementById("slot");
  expect(slot).not.toBeNull();
  expect(slot?.innerHTML).toBe("Hello world!");
});
