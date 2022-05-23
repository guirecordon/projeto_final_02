import React from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST, USER_GET } from '../../api'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading} = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <Input type="text" label="Usuário" name="username" {...username} />
          <Input type="password" label="Senha" name="password" {...password} />
        </div>
        {loading ? (
          <Button disabled>Carregando...</Button>
          ) : (
          <Button>Entrar</Button>
          )}
          <Error error={error} />
      </form>
      <Link to='/login/perdeu'>Esqueceu a senha?</Link>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm