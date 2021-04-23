import currencyDict from "./currency-dict.json"

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
    const { name } = currencyDict.find(
      natCurrencyObj => natCurrencyObj.code === currencyCode
    )
    return name
  }
}