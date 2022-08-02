import { h } from 'preact'
import { usePrerenderData } from '@preact/prerender-data-provider'

import PageWrapper from 'components/PageWrapper'
import Wrapper from 'atoms/Wrapper'

import Hero from './Hero'
import Card from './Card'

const HeroHelper = ({ image, imageAlt, ...props }) => (
  <Hero imgProps={{ ...image, alt: imageAlt }} {...props} />
)

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  return (
    <PageWrapper isLoading={isLoading} data={data}>
      {({ hero, blocks }) => (
        <>
          {hero && <HeroHelper {...hero} />}
          <Wrapper>
            {blocks &&
              blocks.map(({ image, imageAlt, ...blockProps }, i) => {
                return (
                  <Card
                    key={i}
                    imgProps={{ ...image, alt: imageAlt }}
                    {...blockProps}
                  />
                )
              })}
          </Wrapper>
        </>
      )}
    </PageWrapper>
  )
}

export default Home
