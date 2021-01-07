import { useEffect } from 'preact/hooks'

function useHead(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}

export default useHead
