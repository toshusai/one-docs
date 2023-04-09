import { One } from "../../one";

export class IfExample extends One {
  static tag = "x-if-example";
  render() {
    return `
<div> Hello <span -if="show">World!</span> </div>
`;
  }

  show = false;

  mounted() {
    setInterval(() => {
      this.show = !this.show;
    }, 1000);
  }

  // This is just a example of how to use -if.
  // You should call clearInteval.
}
