/**
 * @jest-environment jsdom
 */
import { One } from "../one";

class Test extends One {
  render() {
    return `
<div>
  <div -if="trueValue" id="a"></div>
  <div -if="falseValue" id="b"></div>
</div>
  `;
  }

  trueValue = true;
  falseValue = false;
}

test("test if", () => {
  document.body.innerHTML = `<div id="app"><x-test></x-test></div>`;
  new Test().mount(document.getElementById("app")!);
  var a = document.getElementById("a");
  expect(a).not.toBeNull();
  var b = document.getElementById("b");
  expect(b).toBeNull();
});
