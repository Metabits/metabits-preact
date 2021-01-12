import { h } from 'preact'
import { usePrerenderData } from 'helpers/prerender-data-provider'

import PageWrapper from 'components/PageWrapper'
import Wrapper from 'atoms/Wrapper'

import Hero from './Hero'
import Card from './Card'

const HeroHelper = ({ image, ...props }) => <Hero imgProps={image} {...props} />

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  return (
    <PageWrapper isLoading={isLoading} data={data}>
      {({ hero, blocks }) => (
        <>
          {hero && <HeroHelper {...hero} />}
          <Wrapper>
            {blocks &&
              blocks.map(({ image, ...blockProps }, i) => {
                return <Card key={i} imgProps={image} {...blockProps} />
              })}
          </Wrapper>
        </>
      )}
    </PageWrapper>
  )
}

export default Home
