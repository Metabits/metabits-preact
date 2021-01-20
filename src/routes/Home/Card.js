import { h } from 'preact'
import tw, { styled, css } from 'twin.macro'
import { Link } from 'preact-router/match'

import Image from 'atoms/Image'
import Title from 'atoms/Title'
import Button from 'atoms/Button'

const Container = styled('div')([tw`mb-10 text-center`])

const Card = ({ title, preTitle, imgProps, link, linkText }) => {
  return (
    <Container>
      {imgProps && (
        <div className={css(tw`w-8/12 sm:w-8/12 md:w-1/3 mx-auto mb-4`)}>
          <Image {...imgProps} loading="lazy" />
        </div>
      )}
      {preTitle && <p className={css(tw`mx-auto mb-1 text-xl`)}>{preTitle}</p>}
      <Title as="h2" className={css(tw`max-w-xl mx-auto mb-6`)}>
        {title}
      </Title>
      <Button as={Link} href={link}>
        {linkText}
      </Button>
    </Container>
  )
}

export default Card
