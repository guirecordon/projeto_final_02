import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null)

  React.useEffect(() => {
    function resizeMatch() {
      const {matches} = window.matchMedia(media)
      setMatch(matches)
    }
    resizeMatch()
    window.addEventListener('resize', resizeMatch)
    return () => {
      window.removeEventListener('resize', resizeMatch)
    }
  }, [media])

  return match
}

export default useMedia
