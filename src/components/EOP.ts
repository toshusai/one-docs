import { One } from "../../one";

export class EOP extends One {
  static tag = "x-eop";
  render() {
    return `
<div class="eop-section">
  <button class="scroll-top-button" @click="scrollToTop">Scroll to top 👆</button>
  <div class="eop">End of Page</div>
</div>
`;
  }

  scrollToTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }
}
