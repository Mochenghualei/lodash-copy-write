const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
}

const reUnescapedHtml = /[&<>"']/g
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)

export function escape(string = '') {
  string = String(string)
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, key => htmlEscapes?.[key])
    : string
}
