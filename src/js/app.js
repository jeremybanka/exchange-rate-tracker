// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// BIZ
import Market from "./core"

$(() => {
  console.log(process.env.API_KEY)
  console.log(Market.convertCurrency({ from: `USD`, to: `KRW` }))
})
