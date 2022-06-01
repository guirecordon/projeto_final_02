import React from 'react'
import { PHOTOS_GET } from '../Api'
import Error from '../Components/Helper/Error'
import Loading from '../Components/Helper/Loading'
import useFetch from '../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({page, user, setModalPhoto, setInfinite}) => {

  const {data, loading, error, request} = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      let total = 3
      const {url, options} = PHOTOS_GET({page, total, user})
      const {response, json} = await request(url, options)
      console.log(json);
      if(response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />) }
        </ul>
        
      </div>
    )
  else return null
}

export default FeedPhotos