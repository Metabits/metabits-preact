import { h } from 'preact'
import tw, { css } from 'twin.macro'
import { usePrerenderData } from 'helpers/prerender-data-provider'

import Button from 'atoms/Button'
import Title from 'atoms/Title'
import PageWrapper from 'components/PageWrapper'
import Wrapper from 'atoms/Wrapper'

import Rocket, { Rills } from './Rocket'

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props)
  return (
    <PageWrapper isLoading={isLoading} data={data}>
      {({ seo, content }) => (
        <>
          <Rocket />
          <div className={css(tw`bg-primary mb-4`)}>
            <Wrapper className={css(tw`sm:pt-6`)}>
              <Title as="h2" className={css(tw`text-center max-w-xl mx-auto`)}>
                Utvikling, design, universelt utformet, ytelse, intuitiv
                grensesnitt, analyse
              </Title>
              <p
                className={css(
                  tw`text-center text-lg leading-snug mb-2 max-w-3xl mx-auto`
                )}
              >
                Veien er smal, farene mange, men stien til den perfekte
                nettsiden er innenfor rekkevidde!
              </p>
              <div
                className={css(tw`sm:grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-4`)}
              >
                <Button variant="info" className={css(tw`w-full my-2`)}>
                  Fortell mer
                </Button>
                <Button variant="border" className={css(tw`w-full my-2`)}>
                  Ta kontakt
                </Button>
              </div>
            </Wrapper>
            <Rills />
          </div>
          <Wrapper>
            {seo.title}: {content}
          </Wrapper>
        </>
      )}
    </PageWrapper>
  )
}

export default Home
