import React from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from './UserHeaderNav'

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()
  
  React.useEffect(() => {
    const {pathname} = location
    switch(pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto')
        break
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <header>
      <h1>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
