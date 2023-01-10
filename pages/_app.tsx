import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import LayoutProvider from 'layouts/provider.layout'
import HeaderProvider from 'components/header/provider.header'

import DefaultLayout from 'layouts/default/default.layout'
import DefaultHeader from 'components/header/default/header.component'

import Theme from 'modules/theme.module'

import 'styles/globals.scss'
import 'modules/extensions.module'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <HeaderProvider component={DefaultHeader} />
      <LayoutProvider component={DefaultLayout}>
        <Component {...pageProps} />
      </LayoutProvider>
    </ChakraProvider>
  )
}

export default MyApp
