import { h } from 'preact'
import tw, { css, styled } from 'twin.macro'
import { useState } from 'preact/hooks'

import useInView from 'hooks/use-inview'

const Container = styled('div')([
  tw`w-full bg-cover rounded relative`,
  {
    'img, .placeholder': tw`w-full h-full absolute top-0 left-0 bg-cover rounded`,
  },
])

const containerStylesAsync = css({
  overflow: 'hidden',
  '& img': {
    'will-change': 'opacity',
  },
  '& .placeholder': {
    filter: 'blur(2px)',
    transition: 'opacity 0.4s ease, filter 0.5s ease',
    opacity: '1',
    'transition-delay': '0.3s',
    'z-index': '0',
  },
  '& .main': {
    opacity: '0',
    transition: 'opacity 0.5s ease',
    'transition-delay': '0.3s',
    'z-index': '1',
  },
  '&.lazy-isloaded .main': {
    opacity: '1',
  },
  '&.lazy-isloaded .placeholder': {
    opacity: '0',
  },
})

const Image = ({
  height,
  width,
  className = '',
  srcSet,
  placeholder,
  webpSrcSet,
  loading,
  sizes,
  ...props
}) => {
  const isLazy = loading === 'lazy'
  const [ref, inView] = useInView(!isLazy)
  const [isLoaded, setIsLoaded] = useState(!isLazy)
  const ratio = (height / width) * 100
  const handleImgLoaded = () => {
    setIsLoaded(true)
  }
  const show = isLazy ? inView : true
  const lazyClassName = isLoaded ? 'lazy-isloaded' : 'lazy-notloaded'

  return (
    <Container
      className={`${className} ${isLazy ? containerStylesAsync : ''} ${
        isLazy ? lazyClassName : ''
      }`}
    >
      <div
        ref={ref}
        className={css({
          'padding-top': `${ratio.toFixed(2)}%`,
          width: '100%',
        })}
      />
      {isLazy && placeholder && (
        <div
          className="placeholder"
          style={{
            'background-image': `url(${placeholder})`
          }}
        />
      )}
      {show && (
        <picture>
          {webpSrcSet && (
            <source srcset={webpSrcSet} sizes={sizes} type="image/webp" />
          )}
          <img
            height={height}
            width={width}
            srcSet={srcSet}
            loading={loading}
            sizes={sizes}
            onLoad={isLazy ? handleImgLoaded : null}
            className="main"
            {...props}
          />
        </picture>
      )}
    </Container>
  )
}

export default Image
