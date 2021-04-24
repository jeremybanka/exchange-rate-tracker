import $ from "jquery"
import { d, whichever } from "../biz/entropy"
import CURRENCY_DICT from "../data/CURRENCY_DICT.json"

export default function $randomizeInputs() {
  $(`input#from`).val(whichever(CURRENCY_DICT).code)
  $(`input#to`).val(whichever(CURRENCY_DICT).code)
  $(`input#how-many`).val(d(100))
}
