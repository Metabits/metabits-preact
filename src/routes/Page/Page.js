import { h } from 'preact'
import tw, { css } from 'twin.macro'
import { usePrerenderData } from 'helpers/prerender-data-provider'

import PageWrapper from 'components/PageWrapper'
import Title from 'atoms/Title'
import Wrapper from 'atoms/Wrapper'
import Content from 'atoms/Content'

const Page = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  return (
    <PageWrapper isLoading={isLoading} data={data}>
      {({ seo, content }) => (
        <Wrapper>
          <div className={css(tw`max-w-xl mx-auto mb-8 text-center`)}>
            <Title className={css(tw`text-primary mb-1!`)}>{seo.title}</Title>
            <Title
              subTitle
              className={css(tw`font-light! mt-0! text-gray-300`)}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
            </Title>
          </div>
          <div className={css(tw`max-w-4xl mx-auto`)}>
            <Content content={content} />
          </div>
        </Wrapper>
      )}
    </PageWrapper>
  )
}

export default Page
