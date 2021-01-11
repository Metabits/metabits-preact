import { h } from 'preact'
import tw, { styled } from 'twin.macro'
import { createGlobalStyles } from 'goober/global'

import globalStyles from 'helpers/globalStyles'
import Header from 'components/Header'
import Footer from 'components/Footer'

const GlobalStyles = createGlobalStyles`${globalStyles}`

const Container = styled.div([tw`text-white`])

const Content = styled.main([
  {
    'min-height': '90vh',
  },
])

const App = ({ children, layout: { menu }, url }) => (
  <Container>
    <GlobalStyles />
    <Header menu={menu} url={url} />
    <Content>{children}</Content>
    <Footer menu={menu} />
  </Container>
)

export default App
