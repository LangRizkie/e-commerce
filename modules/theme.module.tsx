import { extendTheme } from '@chakra-ui/react'

import '@fontsource/nunito-sans'

const Theme = extendTheme({
  fonts: {
    heading: '"Nunito Sans"',
    body: '"Nunito Sans"'
  },
  styles: {
    global: {
      body: {
        minWidth: 'fit-content'
      }
    }
  },
  sizes: {
    header: '6rem'
  },
  space: {
    header: '6rem'
  }
})

export default Theme
