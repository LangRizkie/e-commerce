import { CustomDrawerProps } from '@/modules/types.module'
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure } from '@chakra-ui/react'

const DrawerContainer: React.FC<CustomDrawerProps> = ({ title, state, children }) => {
  const setter = useDisclosure(state)

  return (
    <Drawer onClose={setter.onClose} isOpen={setter.isOpen} size='md'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>
          { title }
        </DrawerHeader>
        <DrawerBody>
          { children }
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export { DrawerContainer as Drawer }
