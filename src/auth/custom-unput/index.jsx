import React from 'react'

const CustomInput = ({ type, name, value, onChange, onBlur, text, error }) => {
  return (
    <label>
      <p>
        {text} <span>{error}</span>
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
