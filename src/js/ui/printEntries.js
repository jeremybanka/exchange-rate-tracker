import $ from "jquery"

export default function $printEntries() {
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
