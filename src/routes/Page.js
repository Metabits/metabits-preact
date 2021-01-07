import { h } from 'preact'
import { usePrerenderData } from 'helpers/prerender-data-provider'

import PageWrapper from 'components/PageWrapper'
import Title from 'atoms/Title'
import Wrapper from 'atoms/Wrapper'

const Page = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  return (
    <PageWrapper isLoading={isLoading} data={data}>
      {({ seo, content }) => (
        <Wrapper>
          <Title>{seo.title}</Title>
          <p>{content}</p>
        </Wrapper>
      )}
    </PageWrapper>
  )
}

export default Page
