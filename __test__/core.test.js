import Market from "../src/js/core"

const isValidAmountOfMoney = whatever => {
  const numbersWithDotInMiddle = /\d*.\d*/i
  const stringified = whatever.toString()
  const conclusion = numbersWithDotInMiddle.test(stringified)
  return conclusion
}

describe(`Market.convertCurrency(conversionRequest)`, () => {
  it(`converts (1) USD to KRW (South Korean Won)`, async () => {
    const conversionRequest = {
      from: `USD`,
      to: `KRW`,
    }
    return Market.convertCurrency(conversionRequest).then(response => {
      const { home, away } = response
      const assertion =
        home.code === `USD` &&
        away.code === `KPW` &&
        home.name === `US Dollar` &&
        away.name === `North Korean Won` &&
        home.quantity === 1 &&
        isValidAmountOfMoney(away.quantity) === true
      expect(assertion).toBe(true)
    })
  })
})
