const rsAstralRange = '\\ud800-\\udfff'
const rsComboMarksRange = '\\u0300-\\u036f'
const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
const rsComboSymbolsRange = '\\u20d0-\\u20ff'
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff'
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff'
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange
const rsVarRange = '\\ufe0e\\ufe0f'
const rsZWJ = '\\u200d'
// eslint-disable-next-line no-misleading-character-class
const reHasUnicode = RegExp(`[${rsZWJ}${rsAstralRange}${rsComboRange}${rsVarRange}]`)

/**
 * 校验是否包含unicode字符
 */
export default function hasUnicode(string) {
  return reHasUnicode.test(string)
}
