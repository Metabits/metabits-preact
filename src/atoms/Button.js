import tw, { styled } from 'twin.macro'

const Container = styled.button(
  ({ variant = 'primary', size = 'lg', rounded = true }) => [
    tw`px-6 py-2 focus:outline-none inline-flex items-center justify-center`,
    tw`transform transition-transform duration-75`,
    tw`text-white font-bold shadow border-2`,
    rounded ? tw`rounded-full` : tw`rounded`,
    variant === 'primary' &&
      tw`bg-primary border-primary hocus:(bg-primary-active border-primary-active)`,
    variant === 'info' &&
      tw`bg-dark border-dark hocus:(bg-dark-active border-dark-active)`,
    variant === 'border' && tw`border-white text-white hocus:(border-primary)`,
    size === 'lg' && tw`text-lg`,
  ]
)

const Button = (props) => <Container {...props} />

export default Button
