import React from 'react'
import Input from './Input'

const LoginForm = () => {
  return (
    <form>
      <div>
        <Input type="text" label="Usuário" />
        <Input type="password" label="Senha" />
      </div>
    </form>
  )
}

export default LoginForm