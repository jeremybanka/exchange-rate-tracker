import $ from "jquery"
import { d, whichever } from "../biz/entropy"
import CODE_NAME_SET from "../data/CODE_NAME_SET.json"

export default function $randomizeInputs() {
  $(`select#from`).val(whichever(CODE_NAME_SET).code)
  $(`select#to`).val(whichever(CODE_NAME_SET).code)
  $(`input#how-many`).val(d(100))
}
