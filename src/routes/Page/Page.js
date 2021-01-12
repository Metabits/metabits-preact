import { h } from 'preact'
import tw, { css } from 'twin.macro'
import { usePrerenderData } from 'helpers/prerender-data-provider'

import PageWrapper from 'components/PageWrapper'
import Title from 'atoms/Title'
import Wrapper from 'atoms/Wrapper'
import Content from 'atoms/Content'
import Image from 'atoms/Image'
import SvgImage from 'atoms/SvgImage'

const Page = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  return (
    <PageWrapper isLoading={isLoading} data={data}>
      {({ seo, content, subTitle, contentItems, cover }) => (
        <Wrapper>
          <hgroup className={css(tw`max-w-xl mx-auto mb-2 text-center`)}>
            <Title className={css(tw`text-primary mb-1!`)}>{seo.title}</Title>
            {subTitle && (
              <Title
                subTitle
                className={css(tw`font-light! mt-0! mb-6! text-gray-300`)}
              >
                {subTitle}
              </Title>
            )}
          </hgroup>
          {cover && (
            <div className={css(tw`max-w-3xl mx-auto mb-4`)}>
              <SvgImage {...cover} loading="lazy" />
            </div>
          )}
          {content && (
            <Content
              className={css(tw`max-w-3xl mx-auto mb-8 text-lg`)}
              content={content}
            />
          )}
          {contentItems && (
            <div className={css(tw`md:grid grid-cols-2 gap-4`)}>
              {contentItems.map(({ title, content, image }, i) => (
                <article key={i} className={css(tw`mb-8`)}>
                  <Image
                    {...image}
                    alt={title}
                    loading="lazy"
                    sizes="(min-width: 768px) 48vw, 40vw"
                  />
                  <Title subTitle>{title}</Title>
                  <Content content={content} />
                </article>
              ))}
            </div>
          )}
        </Wrapper>
      )}
    </PageWrapper>
  )
}

export default Page
