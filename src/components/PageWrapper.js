import { h } from 'preact'

import useHead from 'hooks/use-head'

const PageWrapper = ({ isLoading, data, ...props }) => {
  if (isLoading) {
    return '<p>Loading</p>'
  }
  return <PageLoaded data={data} {...props} />
}
const PageLoaded = ({ data, children }) => {
  useHead(data.seo.title)
  return children(data)
}

export default PageWrapper
