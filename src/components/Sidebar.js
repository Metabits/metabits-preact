import { h } from 'preact'
import tw, { styled, css } from 'twin.macro'
import { keyframes } from 'goober'

import useAriaModal from 'hooks/use-aria-modal'

const sharedCss = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`
const bgAnimation = keyframes`
  from, to {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const bgCss = css`
  background: rgba(100%, 100%, 100%, 0.2);
  animation: ${bgAnimation} 0.25s ease-in;
`
const flyIn = keyframes`
  from, to {
    transform: translate(30rem, 0);
  }

  100% {
    transform: translate(0, 0);
  }
`
const Aside = styled('aside')([
  tw`bg-dark py-4 px-6`,
  {
    position: 'fixed',
    top: 0,
    right: '0rem',
    height: '100%',
    'overflow-y': 'auto',
    width: '22rem',
    'z-index': 1000,
    'max-width': '80vw',
  },
])
const animation = css`
  animation: ${flyIn} 0.25s ease-in;
`

const Sidebar = (props) => {
  if (!props.visible) {
    return null
  }

  return <SidebarInner {...props} />
}

const SidebarInner = ({ visible, children, className = '', onClose }) => {
  const [ref] = useAriaModal(onClose)
  return (
    <div ref={ref} className={`${sharedCss} ${className}`}>
      <div className={`${sharedCss} ${bgCss}`} onClick={onClose} />
      <Aside className={animation}>{visible && children}</Aside>
    </div>
  )
}

export default Sidebar
