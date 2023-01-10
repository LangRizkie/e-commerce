import { Flex, FlexProps } from '@chakra-ui/react'

const DefaultHeader: React.ElementType<FlexProps> = ({ children }): JSX.Element => {
  const HeaderContainerClass: FlexProps = {
    width: 'full',
    justifyContent: 'center'
  }

  const HeaderWrapperClass: FlexProps = {
    width: '7xl',
    flexDirection: 'column'
  }

  return (
    <Flex {...HeaderContainerClass}>
      <Flex {...HeaderWrapperClass}>
        {children}
      </Flex>
    </Flex>
  )
}

export default DefaultHeader
