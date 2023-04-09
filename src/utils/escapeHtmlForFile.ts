import { escapeHtml } from "./escapeHtml";

export function escapeHtmlForFile(string: string, src = true) {
  const removedImport = string.split("\n").splice(2).join("\n");
  return escapeHtml(removedImport);
}
