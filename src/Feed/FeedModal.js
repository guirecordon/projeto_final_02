import React from 'react'
import { PHOTO_GET } from '../Api'
import Error from '../Components/Helper/Error'
import Loading from '../Components/Helper/Loading'
import useFetch from '../Hooks/useFetch'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {
const {data, error, loading, request} = useFetch()

React.useEffect(() => {
  const {url, options} = PHOTO_GET(photo.id)
  request(url, options)
}, [photo, request])

function handleOutsideClick(event) {
  if(event.target === event.currentTarget) setModalPhoto(null)
}

  return (
    <div onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal