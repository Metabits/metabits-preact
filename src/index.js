import { h } from 'preact'
import App from 'containers/App'

import { setup } from 'goober'

const cssProps = ['size', 'variant', 'rounded', 'icon', 'as']

const forwardProps = (props) => {
  for (let prop in props) {
    if (cssProps.some((n) => n === prop)) {
      delete props[prop]
    }
  }
}
setup(h, undefined, undefined, forwardProps)

export default App
