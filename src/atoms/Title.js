import { h } from 'preact'
import tw, { styled, css } from 'twin.macro'

const Container = styled('h1')([tw`block mb-2 font-bold leading-tight`])

const VariantsClassName = ({ subTitle }) =>
  [
    subTitle
      ? css(tw`mt-2 text-lg md:text-3xl`)
      : css(tw`mt-0 text-2xl md:text-4xl`),
  ]
    .filter(Boolean)
    .join(' ')

const Title = ({ subTitle, className = '', ...props }) => (
  <Container
    as={subTitle ? 'h2' : 'h1'}
    className={`${className} ${VariantsClassName({ subTitle })}`}
    {...props}
  />
)

export default Title
