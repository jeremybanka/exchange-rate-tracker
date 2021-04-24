import CURRENCY_DICT from "../data/CURRENCY_DICT.json"

export default class Currency {
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
    const { name } = CURRENCY_DICT.find(
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
