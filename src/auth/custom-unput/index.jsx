import React from 'react'

const CustomInput = ({ type, name, value, onChange, text }) => (
  <label>
    <span>{text}</span>
    <input type={type} name={name} value={value} onChange={onChange} />
  </label>
)

export default CustomInput
