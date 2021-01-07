import { h } from 'preact'

import useHead from 'hooks/use-head'
import Spinner from 'atoms/Spinner'

const PageWrapper = ({ isLoading, data, ...props }) => {
  if (isLoading) {
    return <Spinner>Laster inn</Spinner>
  }
  return <PageLoaded data={data} {...props} />
}
const PageLoaded = ({ data, children }) => {
  useHead(data.seo.title)
  return children(data)
}

export default PageWrapper
