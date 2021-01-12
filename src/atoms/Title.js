import { h } from 'preact'
import tw, { styled, css } from 'twin.macro'

const Container = styled('h1')([tw`mb-2 font-bold`])

const VariantsClassName = ({ subTitle }) =>
  [
    subTitle
      ? css(tw`mt-2 text-2xl md:text-2xl leading-tight`)
      : css(tw`mt-0 text-3xl md:text-4xl leading-tight`),
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
