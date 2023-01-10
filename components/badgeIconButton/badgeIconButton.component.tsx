import { BadgeIconButtonProps } from '@/modules/types.module'
import { Flex, FlexProps, IconButton } from '@chakra-ui/react'

const BadgeIconButton: React.FC<BadgeIconButtonProps> = (props) => {
  const BadgeIconButtonClass: FlexProps = {
    position: 'absolute',
    top: 1,
    right: 1,
    padding: 1.5,
    borderRadius: 'full',
    color: 'white',
    bgColor: 'red.400',
    zIndex: 1
  }

  return (
    <Flex position='relative'>
      <IconButton {...props} />
      { props.count && <Flex {...BadgeIconButtonClass} />}
    </Flex>
  )
}

export default BadgeIconButton
