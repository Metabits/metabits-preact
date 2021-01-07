import tw, { styled, css } from 'twin.macro'

const Container = styled.button(() => [
  tw`px-6 py-2 focus:outline-none inline-flex items-center justify-center`,
  tw`transform transition-transform duration-75`,
  tw`text-white font-bold shadow border-2`,
])

const VariantsClassName = ({
  variant = 'primary',
  size = 'lg',
  rounded = true,
}) =>
  [
    rounded ? css(tw`rounded-full`) : css(tw`rounded-full`),
    variant === 'primary' &&
      css(
        tw`bg-primary border-primary hocus:(bg-primary-active border-primary-active)`
      ),
    variant === 'info' &&
      css(tw`bg-dark border-dark hocus:(bg-dark-active border-dark-active)`),
    variant === 'border' &&
      css(tw`border-white text-white hocus:(border-primary)`),
    size === 'lg' && css(tw`text-lg`),
  ]
    .filter(Boolean)
    .join(' ')

const Button = ({ variant, rounded, size, className = '', ...props }) => (
  <Container
    className={`${className} ${VariantsClassName({ variant, size, rounded })}`}
    {...props}
  />
)

export default Button
