import { h } from 'preact'
import { Link } from 'preact-router/match'
import tw, { styled } from 'twin.macro'

import Wrapper from 'atoms/Wrapper'

const Container = styled('footer')([tw`py-4 text-sm text-center text-gray-400`])

const Nav = styled.nav([
  tw`mb-2`,
  {
    a: tw`inline-block text-gray-400 p-2 hocus:(text-white underline)`,
    'a.active': tw`text-white underline`,
  },
])

const now = new Date()

const Footer = ({ menu }) => {
  return (
    <Container>
      <Wrapper>
        <Nav>
          {menu.map(({ menuName, url }, i) => (
            <Link key={i} href={url} activeClassName="active">
              {menuName}
            </Link>
          ))}
        </Nav>
        <p>Metabits as © 2011 - {now.getFullYear()}</p>
      </Wrapper>
    </Container>
  )
}

export default Footer
