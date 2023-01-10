import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import { isEmpty } from 'lodash'
import { Endpoint } from 'modules/endpoint.module'

import Promo from 'components/home/promo.home'
import Category from 'components/home/category.home'
import Flashsale from '@/components/home/flashsale.home'

const Home: NextPage = () => {
  const { data: swiper } = Endpoint.fetch('/api/home/swiper')
  const { data: category } = Endpoint.fetch('/api/home/category')
  const { data: flashsale } = Endpoint.fetch('/api/home/flashsale')

  return (
    <Flex paddingY='4' flexDirection='column'>
      { !isEmpty(swiper) && <Promo data={swiper} /> }
      { !isEmpty(category) && <Category data={category} /> }
      { !isEmpty(flashsale) && <Flashsale data={flashsale} /> }
    </Flex>
  )
}

export default Home
