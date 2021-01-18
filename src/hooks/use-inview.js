import { useEffect, useRef, useState } from 'preact/hooks'

function useInView(initalInview = false) {
  const [inView, setInView] = useState(initalInview)
  const ref = useRef()

  useEffect(() => {
    let isMunted = true
    function handleIntersection(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting && ref.current && isMunted) {
          setInView(true)
        }
      })
    }
    if (window.IntersectionObserver) {
      if (ref.current) {
        const observer = new IntersectionObserver(handleIntersection)
        observer.observe(ref.current)
        return () => {
          isMunted = false
        }
      }
    } else {
      // Default to visible
      setInView(true)
    }
  }, [ref, setInView])
  return [ref, inView]
}

export default useInView
