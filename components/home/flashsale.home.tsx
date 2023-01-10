import Link from 'next/link'
import { decode } from 'html-entities'

import { Box, BoxProps, Flex, FlexProps, Heading, HeadingProps } from '@chakra-ui/react'
import { Swiper as Slider, SwiperProps, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'

import { FlashSaleCardModelData } from '@/modules/models.module'
import { IconProps } from '@/modules/types.module'
import { Countdown } from '@/components/countdown/countdown.component'
import { Card } from '@/components/component.export'

import Icon from '@/modules/icon.module'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const Flashsale: React.FC<FlashSaleCardModelData> = ({ data }) => {
  const FlashSaleContainerClass: FlexProps = {
    marginY: 6,
    flexDirection: 'column'
  }

  const FlashSaleWrapperClass: FlexProps = {
    width: 'full',
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const FlashSaleTitleClass: FlexProps = {
    alignItems: 'center'
  }

  const FlashSaleTitleIconProps: IconProps = {
    icon: 'io5/IoFlash',
    color: '#FBB845'
  }

  const FlashSaleTitleTextClass: HeadingProps = {
    as: 'h1',
    size: 'md',
    marginLeft: 2
  }

  const FlashSaleBoxContainerClass: BoxProps = {
    position: 'relative',
    overflow: 'hidden'
  }

  const FlashSaleSliderProps: SwiperProps = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    modules: [FreeMode]
  }

  return (
    <Flex {...FlashSaleContainerClass}>
      <Flex {...FlashSaleWrapperClass}>
        <Flex {...FlashSaleTitleClass}>
          <Icon {...FlashSaleTitleIconProps} />
          <Heading {...FlashSaleTitleTextClass}>
            { decode(data.title) }
          </Heading>
        </Flex>
        <Countdown date={data.endDate} />
      </Flex>
      <Box {...FlashSaleBoxContainerClass}>
        <Slider {...FlashSaleSliderProps}>
          {
            data.data.map((value, index) =>
              <SwiperSlide key={index}>
                <Link href={value.href ?? '#'} shallow passHref target={value.target}>
                  <Card data={value} isFlashSale={data.isFlashSale} />
                </Link>
              </SwiperSlide>
            )
          }
        </Slider>
      </Box>
    </Flex>
  )
}

export default Flashsale
