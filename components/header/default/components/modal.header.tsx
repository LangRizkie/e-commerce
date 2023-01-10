import { ButtonGroup, Button, ButtonProps, ButtonGroupProps, TextProps, Text, UseDisclosureProps } from '@chakra-ui/react'
import { Fragment } from 'react'
import { HeaderModalProps } from '@/modules/types.module'

import Icon from 'modules/icon.module'
import Search from '@/components/header/default/components/search.header'
import Category from '@/components/header/default/components/category.header'

const ModalSearch: React.FC<UseDisclosureProps> = ({ isOpen, onOpen, onClose }) => {
  const SearchButtonClass: ButtonProps = {
    variant: 'outline',
    width: 'full',
    rightIcon: <Icon icon='Ri/RiSearchLine' />,
    onClick: onOpen
  }

  const SearchTextClass: TextProps = {
    width: 'full',
    fontWeight: 'normal',
    fontSize: 'sm',
    textAlign: 'left'
  }

  return (
    <Fragment>
      <Button {...SearchButtonClass}>
        <Text {...SearchTextClass}>
          Cari Barang Disini
        </Text>
      </Button>
      <Search isOpen={isOpen} onClose={onClose} />
    </Fragment>
  )
}

const ModalCategory: React.FC<UseDisclosureProps> = ({ isOpen, onOpen, onClose }) => {
  const ButtonClass: ButtonProps = {
    size: 'sm',
    minWidth: 'min-content',
    rightIcon: <Icon icon='Bi/BiCategory' />,
    onClick: onOpen
  }

  return (
    <Fragment>
      <Button {...ButtonClass}>Kategori</Button>
      <Category isOpen={isOpen} onClose={onClose} />
    </Fragment>
  )
}


const ModalMenu: React.FC<HeaderModalProps> = ({ stateSearch, stateCategory }) => {
  const ButtonGroupClass: ButtonGroupProps = {
    width: 'full',
    spacing: 4,
    marginX: 6,
    variant: 'ghost',
    alignItems: 'center'
  }

  return (
    <ButtonGroup {...ButtonGroupClass}>
      { <ModalSearch {...stateSearch} /> }
      { <ModalCategory {...stateCategory} /> }
    </ButtonGroup>
  )
}

export default ModalMenu
