import { One } from "../../one";

export class BindingExample extends One {
  static tag = "x-binding-example";
  render() {
    return `
<input type="text" @input="change" :value="value" />
<span -text="value">
`;
  }

  value = "Edit me!";

  change(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
  }
}
