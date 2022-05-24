import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Por favor preencha com um e-mail válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    message: 'Senha deve conter pelo menos 8 digitos, 1 maiúscula, 1 minúscula e um caracter especial'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(value) {
    if(type === false) return false
    if(value.length === 0) {
      setError('Campo não pode ficar vazio.')
      return false
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({target}) {
    if(error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm