import { One } from "../../one";

export class BasicComponent extends One {
  static tag = "x-basic-component";

  render() {
    return `<div>Hello World!</div>`;
  }

  mounted() {
    console.log("Can you see me in the console?");
  }
}
