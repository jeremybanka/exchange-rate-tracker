/* eslint-disable no-restricted-syntax */

import CODE_SET from "../data/CODE_SET.json"
import CURRENCY_DICT from "../data/CURRENCY_DICT.json"

export default function $printSelectOptions() {
  const codesAndNames = []
  for (const code of CODE_SET) {
    const currency = CURRENCY_DICT.find(currency => currency.code === code)
    if (!currency) {
      console.log(`couldn't find currency with code`, code)
      continue
    }
    const { name } = currency
    codesAndNames.push({ name, code })
  }
  console.log(codesAndNames)
}
