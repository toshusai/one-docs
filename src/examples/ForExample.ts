import { One } from "../../one";

export class ForExample extends One {
  static tag = "x-for-example";
  render() {
    return `
<ul>
  <li -for="fruit in array">
    <span -text="fruit"></span>
  </li>
</ul>
`;
  }

  array = ["Apple", "Banana", "Orange", "Grape", "Strawberry"];
}
