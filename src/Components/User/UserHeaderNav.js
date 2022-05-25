import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFotos } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import useMedia from '../../Hooks/useMedia'
import styles from './userHeaderNav.module.css'

const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const {pathname} = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav } ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="postar">
          <AdicionarFotos />
          {mobile && 'Poste Suas Fotos'}     
        </NavLink>
        <button onClick={userLogout}><Sair /></button>
      </nav>
    </>
  )
}

export default UserHeaderNav


