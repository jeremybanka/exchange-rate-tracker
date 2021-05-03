import Currency from "./Currency"

/* eslint-disable prefer-destructuring */
const API_KEY = process.env.API_KEY
/* eslint-enable prefer-destructuring */

export default class Market {
  static convertCurrency({ from, to, howMany = 1 }) {
    return fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`)
      .then(response => {
        if (!response.ok) throw Error(`Not OK!`)
        return response.json()
      })
      .then(response => {
        if (response.result === `error`) throw new Error(`Denied!`)
        return response
      })
      .then(response => Currency.process(response))
      .then(response => Currency.convert({ original: response, to, howMany }))
  }
}
