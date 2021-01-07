import { h } from 'preact'
import { Link } from 'preact-router/match'
import tw, { styled } from 'twin.macro'

import logoImg from 'images/metabits-logo-dark.svg'

const Container = styled(Link)([
  tw`block w-48 sm:w-48 text-white`,
  {
    'max-width': '50%',
  },
])
const Img = styled('img')([tw`block w-full`])

const Logo = () => (
  <Container href="/">
    <Img src={logoImg} alt="Logo Metabits" width="141" height="39" />
  </Container>
)

export default Logo
