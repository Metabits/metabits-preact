import { useContext, useState } from 'preact/hooks'
import { normalizeUrl, getPrerenderdata, checkProps } from './utils'
import { PrerenderDataContext } from './context'
import { PRERENDER_DATA_FILE_NAME } from './constants'

function sleep(ms = 100) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetcher(url) {
  const response = await fetch(
    `${normalizeUrl(url)}${PRERENDER_DATA_FILE_NAME}`
  )
  const json = await response.json()
  return json
}

function usePrerenderData(props, doAutomaticFetch = true) {
  let value
  const [state, setState] = useState({
    value,
    isLoading: false,
    error: false,
  })
  const contextValue = useContext(PrerenderDataContext)
  checkProps(props)

  async function fetchPreRenderData() {
    setState({
      value: null,
      isLoading: true,
      error: false,
    })
    try {
      const [json] = await Promise.all([fetcher(props.url), sleep(300)])
      setState({
        value: json,
        isLoading: false,
        error: false,
      })
    } catch (e) {
      setState({
        value: null,
        isLoading: false,
        error: e,
      })
    }
  }

  if (contextValue.CLI_DATA && contextValue.CLI_DATA.preRenderData) {
    value = contextValue.CLI_DATA.preRenderData
  }

  const data = getPrerenderdata(state.value || value, props)
  if (doAutomaticFetch && !data && !state.isLoading && !state.error) {
    fetchPreRenderData()
    return [data, true, state.error]
  }
  return [data, state.isLoading, state.error]
}

export { usePrerenderData }
