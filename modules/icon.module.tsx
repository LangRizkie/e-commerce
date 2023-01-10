import { Box, BoxProps } from '@chakra-ui/react';
import dynamic from 'next/dynamic'

import { IconContext } from 'react-icons'
import { IconProps } from './types.module'

const Icon: React.FC<IconProps> = ({ ...props }) => {
  const [library, iconComponent] = props.icon.split('/')

  if (!library || !iconComponent) return <div>Could Not Find Icon</div>

  const lib = library.toLowerCase()
  const Icon = dynamic(() =>
    import(`react-icons/${lib}/index.js`)
      .then((el: JSX.Element) =>
        el[iconComponent as keyof JSX.Element])
  )

  const value: IconContext = {
    color: props.color,
    size: props.size || '1.2rem',
    className: props.className,
    style: props.style,
    attr: props.attr
  }

  const box: BoxProps = props

  return (
    <Box {...box}>
      <IconContext.Provider value={value}>
        <Icon />
      </IconContext.Provider>
    </Box>
  )
};

export default Icon
