import $ from "jquery"

const $makeEntry = entry => {
  const $entry = $(`<section/>`)
  const $home = $makeSide(entry.home, `home`)
  const $away = $makeSide(entry.away, `away`)
  if (entry.error) $entry.addClass(`error`)
  return $entry.append($home, $away)
}
const $makeSide = (homeOrAway, which) => {
  const { quantity, code } = homeOrAway
  let tale
  if (typeof quantity === `number` && quantity.toString().length > 6) {
    tale = quantity.toPrecision(6)
  }
  const $side = $(`<div/>`).addClass(which)
  const $tale = $(`<div/>`)
    .addClass(`tale`)
    .text(tale || quantity)
  const $code = $(`<div/>`).addClass(`code`).text(code)
  return $side.append($tale, $code)
}

export default function $printEntries() {
  const $entries = this.entries.map(entry => $makeEntry(entry))
  $(`main`).empty()
  $(`main`).append($entries)
}
