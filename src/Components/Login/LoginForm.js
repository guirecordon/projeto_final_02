import React from 'react'
import { TOKEN_POST, USER_GET } from '../../api'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const {userLogin} = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
      </div>
      <Button>Entrar</Button>
    </form>
  )
}

export default LoginForm