import $ from "jquery"
import { d, whichever } from "../biz/entropy"
import CODE_SET from "../data/CODE_SET.json"

export default function $randomizeInputs() {
  $(`input#from`).val(whichever(CODE_SET))
  $(`input#to`).val(whichever(CODE_SET))
  $(`input#how-many`).val(d(100))
}
