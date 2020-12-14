import { h } from 'preact'
import { Link } from 'preact-router/match'
import tw, { styled, GlobalStyles, theme } from 'twin.macro'

const App = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header>
      <Wrapper>
        <HeaderInner>
          <Logo href="/">Preact site</Logo>
          <nav>
            <NavItem href="/" activeClassName="active">
              Home
            </NavItem>
            <NavItem href="/about" activeClassName="active">About</NavItem>
          </nav>
        </HeaderInner>
      </Wrapper>
    </Header>
    <Content>
      <Wrapper>{children}</Wrapper>
    </Content>
    <Footer>
      <Wrapper>Footer</Wrapper>
    </Footer>
  </Container>
)

const Container = styled.div([
  tw`bg-gradient-to-b from-electric to-ribbon`,
  tw`flex flex-col h-screen w-full`,
  {
    'min-height': '100vh',
  },
])

const Wrapper = styled.div([
  tw`px-4`,
  {
    margin: '0 auto',
    'max-width': '70rem',
  },
])

const Header = styled.header([tw`bg-white py-4`])
const HeaderInner = styled.header([tw`flex items-center justify-between`])
const Logo = styled(Link)([tw`text-xl font-bold text-electric`])
const NavItem = styled(Link)([
  tw`inline-block text-ribbon py-2 px-2 mr-2 font-bold hover:text-electric hover:underline`,
  {
    '&.active': {
      color: theme`colors.electric`,
    },
  },
])

const Content = styled.main([
  tw`py-4`,
  {
    flex: '1 0 auto',
  },
])

const Footer = styled.footer([tw`py-4 text-sm text-center text-white`])

export default App
