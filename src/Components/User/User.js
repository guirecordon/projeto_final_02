import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../../Feed/Feed'
import NotFound from '../../NotFound'
import { UserContext } from '../../UserContext'
import Head from '../Helper/Head'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  const {data} = React.useContext(UserContext)

  return <section>
    <Head title="Minha conta" />
    <UserHeader />
    <Routes>
      <Route path='/' element={<Feed user={data.id} />} />
      <Route path='postar' element={<UserPhotoPost />} />
      <Route path='estatisticas' element={<UserStats />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </section>
}

export default User