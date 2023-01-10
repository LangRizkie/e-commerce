import { Box, BoxProps, FlexProps } from '@chakra-ui/react'
import { Fragment } from 'react'
import { LayoutProviderProps } from 'modules/types.module'

const LayoutProvider: React.FC<LayoutProviderProps<FlexProps>> = ({ component, children }) => {
  const Layout = component

  const LayoutBoxClass: BoxProps = {
    height: 'header'
  }

  return (
    <Fragment>
      <Box {...LayoutBoxClass}></Box>
      <Layout>{children}</Layout>
    </Fragment>
  )
}

export default LayoutProvider
