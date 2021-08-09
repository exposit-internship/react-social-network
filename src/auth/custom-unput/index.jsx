import React from 'react'

const CustomInput = ({ type, name, value, onChange, onBlur, text, error }) => {
  console.log(error)
  return (
    <label>
      <p>
        {text} <span>{error ? <span>{error}</span> : null}</span>
      </p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
  )
}

export default CustomInput
