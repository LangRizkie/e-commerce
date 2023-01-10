import { BoxProps, IconButtonProps, UseDisclosureProps } from '@chakra-ui/react'
import { CSSProperties, SVGAttributes, MouseEventHandler } from 'react'

export type Children = {
  children?: React.ReactNode
}

export type Type<T> = {
  component: React.ElementType<T>
}

export type IconProps = & BoxProps & {
  icon: string
  color?: string
  size?: string
  className?: string
  style?: CSSProperties
  attr?: SVGAttributes<SVGElement>
  onClick?: MouseEventHandler<HTMLInputElement | HTMLButtonElement>
}

export type LayoutProviderProps<T> = Type<T> & Children
export type HeaderProviderProps<T> = Type<T>

export type BadgeIconButtonProps = & IconButtonProps & {
  count?: string | number | boolean
}

export type HeaderModalProps = {
  stateSearch: UseDisclosureProps
  stateCategory: UseDisclosureProps
}

export type CustomDrawerProps = & Children & {
  title: string
  state: UseDisclosureProps
}

