import { h } from 'preact'
import tw, { styled } from 'twin.macro'

import bubbleImg from 'images/bubbles.svg'
import rillsImg from 'images/rills.svg'

const Container = styled('div')([
  tw`bg-gradient-to-b from-dark to-theme-blue pt-3 pb-3 relative sm:pt-6 md:pt-10 flex justify-center`,
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

const HeroImage = ({ children }) => {
  return (
    <Container>
      {children}
      <Bubbles />
    </Container>
  )
}

export default HeroImage
