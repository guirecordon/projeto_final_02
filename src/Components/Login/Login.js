import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import LoginForm from './LoginForm'

const Login = () => {
  const {login} = React.useContext(UserContext)

  if(login === true) return <Navigate to='/conta' />
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default Login