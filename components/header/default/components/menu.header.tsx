import { ButtonGroup, ButtonGroupProps, useControllableState, useDisclosure } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import { Fragment } from 'react'

import { BadgeIconButton } from '@/components/component.export'
import { BadgeIconButtonProps, CustomDrawerProps } from '@/modules/types.module'
import { Drawer } from '@/components/drawer/drawer.component'

import Icon from 'modules/icon.module'

const DrawerMenu: NextComponentType = () => {
  const stateDrawer = useDisclosure()

  const [selected, setSelected] = useControllableState<CustomDrawerProps>({})

  const setDrawer = (props: CustomDrawerProps) => {
    setSelected(props)
    stateDrawer.onOpen()
  }

  const ButtonGroupClass: ButtonGroupProps = {
    spacing: 4,
    marginX: 6,
    variant: 'ghost'
  }

  const BadgeIconButtonCartClass: BadgeIconButtonProps = {
    icon: <Icon icon='Ri/RiShoppingBasketFill' />,
    'aria-label': 'Cart'
  }

  const BadgeIconButtonNotificationClass: BadgeIconButtonProps = {
    icon: <Icon icon='Ri/RiNotification4Fill' />,
    'aria-label': 'Notification'
  }

  const BadgeIconButtonTransactionClass: BadgeIconButtonProps = {
    icon: <Icon icon='Ri/RiFileList2Fill' />,
    'aria-label': 'Transaction'
  }

  return (
    <Fragment>
      <ButtonGroup {...ButtonGroupClass}>
        <BadgeIconButton {...BadgeIconButtonCartClass} onClick={() => setDrawer({ title: 'Keranjang', children: 'keranjang' })} />
        <BadgeIconButton {...BadgeIconButtonNotificationClass} onClick={() => setDrawer({ title: 'notifikasi', children: 'notifikasi' })} />
        <BadgeIconButton {...BadgeIconButtonTransactionClass} onClick={() => setDrawer({ title: 'transaksi', children: 'transaksi' })} />
      </ButtonGroup>
      {
        selected &&
          <Drawer title={selected.title} state={stateDrawer}>
            {selected.children}
          </Drawer>
      }
    </Fragment>
  )
}


export default DrawerMenu
