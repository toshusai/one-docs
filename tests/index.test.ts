/**
 * @jest-environment jsdom
 */

import { One } from "../one";

test("test mount", () => {
  const body = `<div id="app"></div>`;
  document.body.innerHTML = body;
  const app = new One();
  app.mount(document.getElementById("app")!);
});
