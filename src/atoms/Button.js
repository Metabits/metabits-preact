import tw, { styled } from 'twin.macro'

const Container = styled.button(
  ({ variant = 'primary', size = 'lg', rounded = true }) => [
    tw`px-6 py-2 inline-flex items-center justify-center`,
    tw`transform transition-transform duration-75`,
    tw`font-bold shadow border-2`,
    rounded ? tw`rounded-full` : tw`rounded`,
    variant === 'primary' &&
      tw`text-dark bg-primary border-primary hocus:(outline-none ring-2 ring-offset-2 ring-blue-400 ring-offset-dark)`, // hocus:(bg-primary-active)
    variant === 'info' &&
      tw`text-white bg-dark border-dark hocus:(outline-none ring-2 ring-offset-2 ring-dark ring-offset-blue-400)`,
    variant === 'border' &&
      tw`text-dark border-white hocus:(outline-none ring-2 ring-offset-2 ring-dark ring-offset-blue-400)`,
    size === 'lg' && tw`text-lg`,
  ]
)

const Button = (props) => <Container {...props} />

export default Button
