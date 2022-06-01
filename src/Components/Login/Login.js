import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import NotFound from '../../NotFound'
import { UserContext } from '../../UserContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'

const Login = () => {
  const {login} = React.useContext(UserContext)

  if(login === true) return <Navigate to='/conta' />
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='perdeu' element={<LoginPasswordLost />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Login