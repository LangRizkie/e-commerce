import currency from 'currency.js'

const Rupiah = (value: string | number) =>
  currency(value, { symbol: 'Rp ', separator: '.', precision: 0 }).format()

export { Rupiah }
