import React from 'react'
import { USER_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const {userLogin} = React.useContext(UserContext)

  const {loading, error, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const {response} = await request(url, options)
    // userLogin(username.value, password.value)
  }

  return (
    <section>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="email" label="Email" email="email" {...email} />
        <Input type="password" label="Password" password="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} /> 
      </form>
    </section>
  )
}

export default LoginCreate

