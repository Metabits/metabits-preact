import { h } from 'preact'
import { Router } from 'preact-router'
import { Provider } from 'helpers/prerender-data-provider'
import { useState, useCallback } from 'preact/hooks'

import Layout from 'components/Layout'

// Code-splitting is automated for `routes` directory
import Home from 'routes/Home/Home'
import Page from 'routes/Page'
import NotFound from 'routes/NotFound'

const App = (props) => {
  const [url, setUrl] = useState(null)
  const routeChange = useCallback(
    ({ url }) => {
      setUrl(url)
    },
    [setUrl]
  )
  return (
    <Provider value={props}>
      <Layout layout={props.CLI_DATA.preRenderData.layout} url={url}>
        <Router onChange={routeChange}>
          <Home path="/" />
          <Page default />
          <NotFound type="404" default />
        </Router>
      </Layout>
    </Provider>
  )
}

export default App
