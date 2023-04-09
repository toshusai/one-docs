/**
 * @jest-environment jsdom
 */
import { One } from "../one";

class Test extends One {
  render() {
    return `
<div>
  <ul>
    <li -for="i in array" -text="i"></li>
  </ul>
</div>
`;
  }

  array = [1, 2, 3];
}

test("test for", () => {
  document.body.innerHTML = `<div id="app"><x-test></x-test></div>`;
  new Test().mount(document.getElementById("app")!);
  var a = document.querySelectorAll("li");
  expect(a.length).toBe(3);
  let i = 1;
  a.forEach((li: HTMLElement) => {
    expect(li.innerHTML).toBe(i.toString());
    i++;
  });
});
