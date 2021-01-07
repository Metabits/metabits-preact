import { h } from 'preact'
import { styled } from 'twin.macro'

const Container = styled('i')([
  {
    display: 'inline-flex',
    'align-self': 'center',
    position: 'relative',
    height: '1em',
    width: '1em',
    'vertical-align': 'baseline',
    svg: {
      height: '1em',
      width: '1em',
      margin: 0,
    },
  },
])

const Icon = ({ icon, ...props }) => (
  <Container {...props}>
    <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${icon[0]} ${icon[1]}`}
    >
      <path fill="currentColor" d={icon[4]} />
    </svg>
  </Container>
)

export default Icon
