import { h } from 'preact'
import { styled, css } from 'twin.macro'

const Container = styled('div')([
  {
    position: 'relative',
    width: '100%',
    img: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  },
])

const Image = ({ height, width, src, alt = '', className = '' }) => {
  const ratio = (width / height) * 100
  return (
    <Container
      className={`${className} ${css({
        'padding-top': `${ratio.toFixed(2)}%`,
      })}`}
    >
      <img height={height} width={width} src={src} alt={alt} />
    </Container>
  )
}

export default Image
