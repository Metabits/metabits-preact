import { h } from 'preact'
import tw, { styled, css } from 'twin.macro'

import bubbleImg from 'images/svg/bubbles.svg'
import rillsImg from 'images/svg/rills.svg'
import rocketImg from 'images/svg/rocket.svg'

import Image from 'atoms/Image'

const Container = styled('div')([
  tw`bg-gradient-to-b from-dark to-theme-blue pt-3 sm:pt-6 md:pt-10 flex justify-center`,
  {
    position: 'relative',
    'padding-bottom': '1rem',
  },
])
const Bubbles = styled('div')([
  tw`w-full`,
  {
    background: `url(${bubbleImg}) repeat-x`,
    position: 'absolute',
    bottom: '0',
    'background-size': 'cover',
    'background-position': 'top center',
    height: '3rem',
    '@media (min-width: 768px)': {
      'background-size': 'contain',
    },
  },
])
export const Rills = styled('div')([
  tw`w-full`,
  {
    background: `url(${rillsImg}) repeat-x`,
    'background-size': 'contain',
    'background-position': 'center',
    height: '15px',
  },
])

const Rocket = () => {
  return (
    <Container>
      <div className={css(tw`w-8/12 sm:w-8/12 md:w-1/3`)}>
        <Image src={rocketImg} height="231" width="185" alt="rakett" />
      </div>
      <Bubbles />
    </Container>
  )
}

export default Rocket
