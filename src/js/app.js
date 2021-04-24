// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
import $printEntries from "./ui/printEntries"
// BIZ
import Log from "./biz/Log"
import Market from "./biz/Market"

$(() => {
  const log = new Log({ key: `conversion`, onRender: $printEntries })

  $(`form`).on(`submit`, event => {
    event.preventDefault()
    console.log(`fired submit`)
    const from = $(`input#from`).val()
    const to = $(`input#to`).val()
    const howMany = parseInt($(`input#how-many`).val(), 10) || undefined
    Market.convertCurrency({ from, to, howMany }).then(conversion => {
      log.add(conversion)
    })
    $(`input#how-many`).val(``)
  })
  $(`button#clear`).on(`click`, () => {
    log.clear()
  })
})
