import { h } from 'preact'
import tw, { styled } from 'twin.macro'
import { createGlobalStyles } from 'goober/global'

import globalStyles from 'helpers/globalStyles'
import Header from 'components/Header'
import Wrapper from 'atoms/Wrapper'

const GlobalStyles = createGlobalStyles`${globalStyles}`

const Container = styled.div([
  tw`text-white`,
  tw`flex flex-col h-screen w-full`,
])

const Content = styled.main([
  {
    flex: '1',
    'min-height': '90vh',
  },
])

const Footer = styled.footer([tw`py-4 text-sm text-center text-white`])

const App = ({ children, layout: { menu }, url }) => (
  <Container>
    <GlobalStyles />
    <Header menu={menu} url={url} />
    <Content>{children}</Content>
    <Footer>
      <Wrapper>Footer</Wrapper>
    </Footer>
  </Container>
)

export default App
