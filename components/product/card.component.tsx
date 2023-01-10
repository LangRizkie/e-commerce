import Image from 'next/image'

import { Rupiah } from '@/modules/helper.module'
import { CardModel } from '@/modules/models.module'
import { Flex, Box, Tag, Text, Progress, FlexProps, BoxProps, TextProps, TagProps, ProgressProps } from '@chakra-ui/react'
import Icon from '@/modules/icon.module'
import { IconProps } from '@/modules/types.module'

const Card: React.FC<{ data: CardModel, isFlashSale: boolean }> = ({ data, isFlashSale }) => {
  const CardContainerClass: FlexProps = {
    width: 52,
    height: 'full',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderRadius: 'md',
    overflow: 'hidden',
    flexDirection: 'column'
  }

  const CardImageContainerClass: BoxProps = {
    position: 'relative'
  }

  const CardImageTypeClass: BoxProps = {
    position: 'absolute',
    bottom: 0,
    fontSize: 'xx-small',
    borderTopRightRadius: 'md',
    paddingY: 1,
    paddingX: 2,
    bgColor: 'red.300'
  }

  const CardContentContainerClass: FlexProps = {
    height: 'full',
    gap: 1,
    margin: 2,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }

  const CardContentTitleContainerClass: BoxProps = {
    height: 12
  }

  const CardContentTitleClass: TextProps = {
    fontSize: 'sm',
    noOfLines: 2
  }

  const CardContentBodyClass: FlexProps = {
    gap: 1,
    flexDirection: 'column'
  }

  const CardContentPriceClass: TextProps = {
    fontSize: 'md',
    fontWeight: 'semibold'
  }

  const CardContentFlashSaleContainerClass: FlexProps = {
    fontSize: 'xs',
    alignItems: 'center'
  }

  const CardContentFlashSaleTagClass: TagProps = {
    size: 'sm',
    bgColor: 'red.100',
    color: 'red.500'
  }

  const CardContentFlashSalePriceClass: TextProps = {
    marginLeft: 2,
    as: 'del'
  }

  const CardContentLocationClass: FlexProps = {
    alignItems: 'center'
  }

  const CardContentLocationIconProps: IconProps = {
    icon: 'Ti/TiLocationArrowOutline',
    size: '1rem'
  }

  const CardContentLocationTextClass: TextProps = {
    fontSize: 'xs'
  }

  const CardContentProgressClass: ProgressProps = {
    size: 'xs',
    marginY: 2
  }

  return (
    <Flex {...CardContainerClass}>
      <Box {...CardImageContainerClass}>
        <Image src={data.src} width='208' height='208' alt={data.src} />
        {
          isFlashSale && data.flashsale &&
          <Box {...CardImageTypeClass} >{data.flashsale.title}</Box>
        }
      </Box>
      <Flex {...CardContentContainerClass}>
        <Box {...CardContentTitleContainerClass}>
          <Text {...CardContentTitleClass}>{data.title}</Text>
        </Box>
        <Flex {...CardContentBodyClass}>
          <Text {...CardContentPriceClass}>
            { Rupiah(isFlashSale && data.flashsale ? data.flashsale.discountPrice : data.price) }
          </Text>
          {
            isFlashSale &&
            <Flex {...CardContentFlashSaleContainerClass}>
                {
                  isFlashSale && data.flashsale &&
                  <Tag {...CardContentFlashSaleTagClass}>{data.flashsale.discountPercentage}%</Tag>
                }
              <Text {...CardContentFlashSalePriceClass}>{ Rupiah(data.price) }</Text>
            </Flex>
          }
          <Flex {...CardContentLocationClass}>
            <Icon {...CardContentLocationIconProps} />
            <Text {...CardContentLocationTextClass}>{data.seller.city}</Text>
          </Flex>
          {
            isFlashSale && data.flashsale &&
            <Progress {...CardContentProgressClass} value={data.flashsale.discountPercentage} />
          }
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Card
