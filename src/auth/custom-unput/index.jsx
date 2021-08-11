const CustomInput = ({ type, name, value, onChange, text, error }) => {
  return (
    <div className="custom__input">
      <div className="custom__header">
        <label>{text}</label>
        {error ? <span>({error})</span> : null}
      </div>
      <input
        className="custom__footer"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default CustomInput
