import { One } from "../../one";

export class TextExample extends One {
  static tag = "x-text-example";
  render() {
    return `<div -text="value + ' a text'"></div>`;
  }

  value = "This is";
}
