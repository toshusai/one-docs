import { escapeHtml } from "./escapeHtml";
import { escapeHtmlForFile } from "./escapeHtmlForFile";
import { warpBackQuote } from "./warpBackQuote";

export function injectFileCode(code: string) {
  return warpBackQuote(escapeHtml(escapeHtmlForFile(code))).replaceAll(
    /\$/gm,
    "\\$"
  );
}
