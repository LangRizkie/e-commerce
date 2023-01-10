import { FlexProps } from '@chakra-ui/react'
import { HeaderProviderProps } from 'modules/types.module'

const HeaderProvider: React.FC<HeaderProviderProps<FlexProps>> = ({ component }): JSX.Element => {
  const Header = component

  const HeaderClass: FlexProps = {
    position: 'fixed',
    left: 0,
    top: 0,
    bgColor: 'white',
    zIndex: 2
  }

  return <Header {...HeaderClass} />
}

export default HeaderProvider
