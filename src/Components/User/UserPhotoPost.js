import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PHOTO_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import styles from './UserPhotoPost.module.css'

const UserPhotoPost = () => {
  const nome = useForm()
  const peso = useForm()
  const idade = useForm()
  const [img, setImg] = React.useState({})
  const {data, error, loading, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if(data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault()
    const postData = new FormData();
    postData.append('img', img.raw)
    postData.append('peso', peso.value)
    postData.append('nome', nome.value)
    postData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const {url, options} = PHOTO_POST(postData, token)
    request(url, options)
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input className={styles.file} type="file" id="img" name="img" onChange={handleImgChange} />
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button> }
        <Error error={error} />  
      </form>
      {img.preview && <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>}
    </section>
  )
}

export default UserPhotoPost