/* eslint-disable no-restricted-syntax */
import $ from "jquery"
import CODE_NAME_SET from "../data/CODE_NAME_SET.json"

const $makeOption = ({ code, name }) =>
  $(`<option/>`).attr(`value`, code).text(`${name} (${code})`)

const $makeOptions = () =>
  CODE_NAME_SET.map(codeNameObj => $makeOption(codeNameObj))

export default function $printSelectOptions() {
  $(`select#from`).append($makeOptions())
  $(`select#to`).append($makeOptions())
}
