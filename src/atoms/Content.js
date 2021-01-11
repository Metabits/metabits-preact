import { h } from 'preact'
import Markdown from 'markdown-to-jsx'

import tw, { styled } from 'twin.macro'

const Container = styled(Markdown)([
  {
    'h2, h3, h4': tw`leading-tight mt-2 font-bold`,
    h2: tw`text-2xl md:text-3xl mb-2`,
    h3: tw`text-xl mb-2`,
    p: tw`mb-4`,
    a: tw`text-primary underline hocus:(text-white no-underline)`,
  },
])

const Content = ({ content, className }) => (
  <Container className={className}>{content}</Container>
)

export default Content
