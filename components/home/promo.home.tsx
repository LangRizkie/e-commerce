import Link from 'next/link'
import Image from 'next/image'

import { Box, BoxProps, Button, ButtonProps } from '@chakra-ui/react'
import { Swiper as Slider, SwiperProps, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { HomePromoModelData } from '@/modules/models.module'

import 'swiper/css'
import 'swiper/css/pagination'

const Promo: React.FC<HomePromoModelData> = ({ data }) => {
  const PromoContainerClass: BoxProps = {
    position: 'relative',
    borderRadius: 'lg',
    overflow: 'hidden'
  }

  const PromoSliderProps: SwiperProps = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { clickable: true },
    modules: [Pagination, Autoplay]
  }

  const PromoButtonClass: ButtonProps = {
    position: 'absolute',
    size: 'xs',
    bottom: 2,
    right: 2,
    zIndex: 1
  }

  return (
    <Box {...PromoContainerClass}>
      <Slider {...PromoSliderProps}>
        {
          data.map((value, index) =>
            <SwiperSlide key={index}>
              {
                value.href
                  ? (
                    <Link href={value.href} shallow passHref target={value.target}>
                      <Image src={value.src} width='1280' height='300' alt={value.src} />
                    </Link>
                  )
                  : (
                    <Image src={value.src} width='1280' height='300' alt={value.src} />
                  )
              }
          </SwiperSlide>
          )
        }
      </Slider>
      <Link href='/promo' shallow passHref>
        <Button {...PromoButtonClass}>
          Lihat Promo Lainnya
        </Button>
      </Link>
    </Box>
  )
}

export default Promo
