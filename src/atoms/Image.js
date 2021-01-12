import { h } from 'preact'
import tw, { styled, css } from 'twin.macro'

const Container = styled('div')([
  tw`w-full bg-cover rounded`,
  {
    img: tw`block w-full w-full rounded`,
  },
])

const Image = ({
  height,
  width,
  className = '',
  srcSet,
  placeholder,
  webpSrcSet,
  ...props
}) => {
  return (
    <Container
      className={`${className} ${css({
        'background-image': `url(${placeholder})`,
      })}`}
    >
      <picture>
        <source srcset={webpSrcSet} type="image/webp" />
        <img height={height} width={width} srcSet={srcSet} {...props} />
      </picture>
    </Container>
  )
}

export default Image
