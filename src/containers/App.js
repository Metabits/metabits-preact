import { h } from 'preact'
import { Router } from 'preact-router'

import Layout from 'components/Layout'

// Code-splitting is automated for `routes` directory
import Home from 'routes/Home'
import About from 'routes/About'

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </Layout>
)

export default App
