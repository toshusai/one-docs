export function escapeHtml(string: string) {
  return string.replace(/[&'`"<>]/g, (match: string) => {
    return (
      {
        "&": "&amp;",
        "'": "&#x27;",
        "`": "&#x60;",
        '"': "&quot;",
        "<": "&lt;",
        ">": "&gt;",
      }[match] ?? ""
    );
  });
}
