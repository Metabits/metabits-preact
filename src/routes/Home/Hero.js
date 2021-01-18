import { h } from 'preact'
import tw, { css } from 'twin.macro'
import { Link } from 'preact-router/match'

import Button from 'atoms/Button'
import Title from 'atoms/Title'
import Wrapper from 'atoms/Wrapper'
import Image from 'atoms/Image'

import HeroImage, { Rills } from './HeroImage'

const Hero = ({
  imgProps,
  title,
  subTitle,
  primaryLink,
  primaryLinkName,
  secondaryLink,
  secondaryLinkName,
}) => {
  return (
    <>
      <HeroImage>
        <div className={css(tw`w-8/12 sm:w-8/12 md:w-1/3`)}>
          {imgProps && <Image {...imgProps} loading="eager" />}
        </div>
      </HeroImage>
      <div className={css(tw`bg-primary mb-8`)}>
        <Wrapper className={css(tw`sm:pt-6`)}>
          <Title as="h2" className={css(tw`text-center max-w-xl mx-auto`)}>
            {title}
          </Title>
          <p
            className={css(
              tw`text-center text-lg leading-snug mb-2 max-w-3xl mx-auto`
            )}
          >
            {subTitle}
          </p>
          <div
            className={css(
              tw`sm:grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-4`
            )}
          >
            <Button
              variant="info"
              as={Link}
              href={primaryLink}
              className={css(tw`w-full my-2`)}
            >
              {primaryLinkName}
            </Button>
            <Button
              variant="border"
              as={Link}
              href={secondaryLink}
              className={css(tw`w-full my-2`)}
            >
              {secondaryLinkName}
            </Button>
          </div>
        </Wrapper>
        <Rills />
      </div>
    </>
  )
}

export default Hero
