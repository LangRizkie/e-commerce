import { ButtonGroup, Button, ButtonProps, ButtonGroupProps, Avatar, Flex, FlexProps, Text, TextProps } from '@chakra-ui/react'
import { NextComponentType } from 'next'

const UnLoggedInComponent: NextComponentType = () => {
  const ButtonGroupClass: ButtonGroupProps = {
    spacing: 2
  }

  const ButtonLoginClass: ButtonProps = {
    variant: 'solid',
    size: 'sm'
  }

  const ButtonRegisterClass: ButtonProps = {
    variant: 'outline',
    size: 'sm'
  }

  return (
    <ButtonGroup {...ButtonGroupClass}>
      <Button {...ButtonLoginClass}>
        Masuk
      </Button>
      <Button {...ButtonRegisterClass}>
        Daftar
      </Button>
    </ButtonGroup>
  )
}

const LoggedInComponent: NextComponentType = () => {
  const LoggedInClass: FlexProps = {
    alignItems: 'center',
    marginLeft: 6,
    gap: 4
  }

  const LoggedInTextClass: TextProps = {
    fontSize: 'sm',
    whiteSpace: 'nowrap'
  }

  return (
    <Flex {...LoggedInClass}>
      <Avatar size='xs' src='#' />
      <Text {...LoggedInTextClass}>Hai, Gilang</Text>
    </Flex>
  )
}

const Credentials: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  return isLoggedIn
    ? <LoggedInComponent />
    : <UnLoggedInComponent />
}

export default Credentials
