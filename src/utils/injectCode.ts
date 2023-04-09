import { escapeHtml } from "./escapeHtml";
import { warpBackQuote } from "./warpBackQuote";

export function injectCode(code: string) {
  return warpBackQuote(escapeHtml(code));
}
