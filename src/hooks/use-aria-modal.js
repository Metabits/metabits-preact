import { useEffect, useRef } from 'preact/hooks'

function useAriaModal(closeEvent) {
  const ref = useRef()
  const refAction = useRef(closeEvent)
  useEffect(() => {
    window.document.body.style.overflow = 'hidden'
    return function cleanup() {
      window.document.body.style.overflow = ''
    }
  }, [])
  useEffect(() => {
    const currentFocus = document.activeElement
    function handleTabKey(event) {
      if (!ref.current) {
        return
      }
      const focusableModalElements = Array.from(
        ref.current.querySelectorAll('a[href], button, textarea, input, select')
      )
      const currentIndex = focusableModalElements.findIndex(
        (el) => el === document.activeElement
      )
      const nextIndexAdd = event.shiftKey ? -1 : 1
      let nextIndex = currentIndex + nextIndexAdd
      const lastIndex = focusableModalElements.length - 1
      if (nextIndex > lastIndex) {
        nextIndex = 0
      }
      if (nextIndex < 0) {
        nextIndex = lastIndex
      }
      focusableModalElements[nextIndex].focus()
      event.preventDefault()
    }
    const keyListenersMap = new Map([
      [27, refAction.current],
      [9, handleTabKey],
    ])
    function keyListener(event) {
      const listener = keyListenersMap.get(event.keyCode)
      return listener && listener(event)
    }
    document.addEventListener('keydown', keyListener)

    return () => {
      document.removeEventListener('keydown', keyListener)
      if (currentFocus && currentFocus.focus) {
        currentFocus.focus()
      }
    }
  }, [ref, refAction])
  return [ref]
}

export default useAriaModal
