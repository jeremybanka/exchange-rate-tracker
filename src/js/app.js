// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
import $printEntries from "./ui/printEntries"
import $randomizeInputs from "./ui/randomizeInputs"
import $printSelectOptions from "./ui/printSelectOptions"
// BIZ
import Log from "./biz/Log"
import Market from "./biz/Market"

$(() => {
  const log = new Log({ key: `conversion`, onRender: $printEntries })
  $printSelectOptions()
  $randomizeInputs()
  $(`form`).on(`submit`, event => {
    event.preventDefault()
    const from = $(`select#from`).val()
    const to = $(`select#to`).val()
    const howMany = parseInt($(`input#how-many`).val(), 10) || undefined
    Market.convertCurrency({ from, to, howMany })
      .then(conversion => {
        log.add(conversion)
      })
      .catch(error => {
        console.error(error)
        log.add({
          error: true,
          home: {
            quantity: howMany,
            code: from,
            name: `not found`,
          },
          away: {
            quantity: error,
            code: to,
            name: `not found`,
          },
        })
      })
    $(`input#how-many`).val(``)
  })
  $(`button#clear`).on(`click`, () => {
    log.clear()
  })
})
