import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import styles from './Header.module.css'

const Header = () => {
  const {data} = React.useContext(UserContext)

  return (
    <nav className={styles.header}>
      <Link to='/'>Home</Link>
      {data ? 
        <Link to='/conta'>
          {data.username}
        </Link>
            : 
        <Link to='/login'>Login / Criar</Link>
      }
      

    </nav>
  )
}

export default Header