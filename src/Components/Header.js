import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import styles from './Header.module.css'

const Header = () => {
  const {data, userLogout} = React.useContext(UserContext)

  return (
    <nav className={styles.header}>
      <Link to='/'>Home</Link>
      {data ? 
        <Link to='/conta'>
          {data.username}
          <button onClick={userLogout}>Sair</button>
        </Link>
            : 
        <Link to='/login'>Login / Criar</Link>
      }
      

    </nav>
  )
}

export default Header