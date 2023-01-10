import { Flex, FlexProps, HStack, StackProps, Tag, TagProps, Text } from '@chakra-ui/react'
import Countdown, { CountdownProps, CountdownRendererFn } from 'react-countdown'

const CountdownContainer: React.FC<CountdownProps> = ({ date }) => {
  const Renderer: CountdownRendererFn = ({ formatted: { hours, minutes, seconds }, completed }) => {
    if (completed) return <Text>Finished</Text>

    const CountdownContainerClass: FlexProps = {
      alignItems: 'center'
    }

    const CountdownStackContainerClass: StackProps = {
      fontWeight: 'semibold'
    }

    const CountdownTagContainerClass: TagProps = {
      size: 'md',
      variant: 'solid'
    }

    return (
      <Flex {...CountdownContainerClass}>
        <HStack {...CountdownStackContainerClass}>
          <Tag {...CountdownTagContainerClass}>{hours}</Tag>
          <Text>:</Text>
          <Tag {...CountdownTagContainerClass}>{minutes}</Tag>
          <Text>:</Text>
          <Tag {...CountdownTagContainerClass}>{seconds}</Tag>
        </HStack>
      </Flex>
    )
  }

  return <Countdown date={date} renderer={Renderer} />
}

export { CountdownContainer as Countdown }
