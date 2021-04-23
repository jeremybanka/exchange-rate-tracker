import currencyDict from "./currency-dict.json"

/* eslint-disable prefer-destructuring */
const API_KEY = process.env.API_KEY
/* eslint-enable prefer-destructuring */

class Currency {
  constructor(exchangeRateApiObj) {
    /* eslint-disable camelcase */
    const { base_code, conversion_rates } = exchangeRateApiObj
    this.name = Currency.nameFromCode(base_code)
    this.code = base_code
    this.rates = { ...conversion_rates }
    /* eslint-enable camelcase */
  }

  static async process(exchangeRateApiObj) {
    exchangeRateApiObj = new this(exchangeRateApiObj)
    return exchangeRateApiObj
  }

  static nameFromCode(currencyCode) {
    const { name } = currencyDict.find(
      natCurrencyObj => natCurrencyObj.code === currencyCode
    )
    return name
  }

  static async convert({ original, howMany, to }) {
    const conversionRate = original.rates[to]
    const quantityHome = howMany
    const quantityAway = quantityHome * conversionRate
    const codeHome = original.code
    const codeAway = to
    const nameHome = original.name
    const nameAway = Currency.nameFromCode(codeAway)
    return {
      home: {
        quantity: quantityHome,
        code: codeHome,
        name: nameHome,
      },
      away: {
        quantity: quantityAway,
        code: codeAway,
        name: nameAway,
      },
    }
  }
}

export default class Market {
  static convertCurrency({ from, to, howMany = 1 }) {
    console.log(Currency.process)
    console.log(Currency.convert)

    return fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`)
      .then(response => {
        if (!response.ok) throw Error(response.statusText)
        return response.json()
      })
      .then(response => Currency.process(response))
      .then(response => Currency.convert({ original: response, to, howMany }))
      .catch(error => error)
  }
}
