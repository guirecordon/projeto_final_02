import React from 'react'
import { PHOTOS_GET } from '../Api'
import Error from '../Components/Helper/Error'
import Loading from '../Components/Helper/Loading'
import useFetch from '../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'

const FeedPhotos = ({setModalPhoto}) => {

  const {data, loading, error, request} = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
      const {response, json} = await request(url, options)
      console.log(json);
    }
    fetchPhotos()
  }, [request])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
    return (
      <div>
        <ul>
          {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />) }
        </ul>
        
      </div>
    )
  else return null
}

export default FeedPhotos