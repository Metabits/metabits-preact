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
  loading,
  ...props
}) => {
  return (
    <Container
      className={`${className} ${css({
        'background-image': loading === 'lazy' ? `url(${placeholder})` : null,
      })}`}
    >
      <picture>
        {webpSrcSet && <source srcset={webpSrcSet} type="image/webp" />}
        <img
          height={height}
          width={width}
          srcSet={srcSet}
          loading={loading}
          {...props}
        />
      </picture>
    </Container>
  )
}

export default Image
