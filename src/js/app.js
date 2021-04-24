// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// CORE
import Log from "./Log"
// BIZ
import Market from "./Market"

function $printEntries() {
  const $makeEntry = entry => {
    console.log(entry.home, entry.away)
    console.log(entry.home, entry.away)
    const $entry = $(`<section/>`)
    const $home = $makeSide(entry.home, `home`)
    const $away = $makeSide(entry.away, `away`)
    return $entry.append($home, $away)
  }
  const $makeSide = (homeOrAway, which) => {
    console.log(homeOrAway)
    const { quantity, code } = homeOrAway
    const $side = $(`<div/>`).addClass(which)
    const $tale = $(`<div/>`).addClass(`tale`).text(quantity)
    const $code = $(`<div/>`).addClass(`code`).text(code)
    return $side.append($tale, $code)
  }
  const $entries = this.entries.map(entry => $makeEntry(entry))
  $(`main`).empty()
  $(`main`).append($entries)
}

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
