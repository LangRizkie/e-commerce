export type HomeCategoryModel = {
  href: string
  target: string
  label: string
  icons: Array<string>
}

export type HomePromoModel = {
  src: string
  href: string
  target: string
}

export type FlashSaleCardModel = {
  title: string
  endDate: string
  isFlashSale: boolean
  data: Array<CardModel>
}

export type FlashSaleModel = {
  title: string
  discountPrice: number
  discountPercentage: number
  discountAmount: number
  discountLeft: number
}

export type SellerModel = {
  id: number
  name: string
  city: string
}

export type CardModel = {
  flashsale?: FlashSaleModel
  seller: SellerModel
  title: string
  price: number
  src: string
  href: string
  target: string
}

export type HomeCategoryModelData = {
  data: Array<HomeCategoryModel>
}

export type HomePromoModelData = {
  data: Array<HomePromoModel>
}

export type FlashSaleCardModelData = {
  data: FlashSaleCardModel
}
