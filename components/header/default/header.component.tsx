import { Divider, DividerProps, Flex, FlexProps, useDisclosure } from '@chakra-ui/react'

import ModalMenu from './components/modal.header'
import Logo from './components/logo.header'
import DrawerMenu from './components/menu.header'
import Credentials from './components/credentials.header'

const DefaultHeader: React.ElementType<FlexProps> = (props): JSX.Element => {
  const stateSearch = useDisclosure()
  const stateCategory = useDisclosure()

  const isLoggedIn = true

  const HeaderContainerClass: FlexProps = {
    width: 'full',
    height: 'header',
    padding: 6,
    flexDirection: 'column',

    ...props
  }

  const HeaderWrapperClass: FlexProps = {
    width: '7xl',
    alignItems: 'center',
    alignSelf: 'center'
  }

  const DividerClass: DividerProps = {
    orientation: 'vertical'
  }

  return (
    <Flex {...HeaderContainerClass}>
      <Flex {...HeaderWrapperClass}>
        <Logo />
        <ModalMenu
          stateSearch={stateSearch}
          stateCategory={stateCategory}
        />
        <Divider {...DividerClass} />
        <DrawerMenu />
        { isLoggedIn && <Divider {...DividerClass} /> }
        <Credentials isLoggedIn={isLoggedIn} />
      </Flex>
    </Flex>
  )
}


export default DefaultHeader
