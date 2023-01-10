import { NextComponentType } from 'next'
import { Skeleton } from '@/components/component.export'
import { SkeletonProps } from '@chakra-ui/react'

const Logo: NextComponentType = () => {
  const SkeletonClass: SkeletonProps = {
    width: 32,
    minWidth: 32,
    height: 8,
    marginRight: 6
  }

  return <Skeleton {...SkeletonClass} />
}

export default Logo
