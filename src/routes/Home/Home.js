import { h } from 'preact'
import { usePrerenderData } from 'helpers/prerender-data-provider'

import PageWrapper from 'components/PageWrapper'
import Wrapper from 'atoms/Wrapper'

import Hero from './Hero'
import Card from './Card'

import rocket from 'images/svg/rocket.svg'
import fish from 'images/svg/fish.svg'
import devices from 'images/svg/devices.svg'

const images = {
  rocket: {
    src: rocket,
    height: 231,
    width: 185,
    alt: '',
  },
  fish: {
    src: fish,
    height: 184,
    width: 128,
    alt: '',
  },
  devices: {
    src: devices,
    height: 220,
    width: 87,
    alt: '',
  },
}

const HeroHelper = ({ img, ...props }) => (
  <Hero imgProps={images[img]} {...props} />
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
              blocks.map(({ img, ...blockProps }, i) => {
                const imgProps = img && images[img]
                return <Card key={i} imgProps={imgProps} {...blockProps} />
              })}
          </Wrapper>
        </>
      )}
    </PageWrapper>
  )
}

export default Home
