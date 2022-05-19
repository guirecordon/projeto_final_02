import React from 'react'

const Input = ({label, type, name, onChange, error, value, onBlur}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} onChange={onChange} onBlur={onBlur} value={value} />
      {error && <p>{error}</p>}
    </div>
  )
}

export default Input