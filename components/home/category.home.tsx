import { ButtonGroup, Button, ButtonGroupProps, ButtonProps } from '@chakra-ui/react'
import { Fragment } from 'react'
import { decode } from 'html-entities'

import { HomeCategoryModelData } from 'modules/models.module'

import Icon from 'modules/icon.module'
import Link from 'next/link'

const Category: React.FC<HomeCategoryModelData> = ({ data }) => {
  const ButtonGroupClass: ButtonGroupProps = {
    marginY: 4,
    variant: 'ghost',
    justifyContent: 'space-between'
  }

  const ButtonClass: ButtonProps = {
    leftIcon: <Icon icon='Bi/BiCustomize' />,
    'aria-label': 'More'
  }

  return (
    <ButtonGroup {...ButtonGroupClass}>
      {
        data.map((value, index) =>
          <Link key={index} href={value.href} shallow passHref target={value.target}>
            <Button aria-label={value.label} leftIcon={
              <Fragment>
                { value.icons.map((icon, id) => <Icon key={id} icon={icon.getIcon()} />) }
              </Fragment>
            }>
              {decode(value.label)}
            </Button>
          </Link>
        )
      }
      <Link href='#' shallow passHref>
        <Button {...ButtonClass}>
          Lainnya
        </Button>
      </Link>
    </ButtonGroup>
  )
}

export default Category
