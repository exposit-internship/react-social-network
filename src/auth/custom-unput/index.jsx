import PropTypes from 'prop-types'

import '../index.scss'

const CustomInput = ({ type, name, value, onChange, text, error }) => (
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

CustomInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
  error: PropTypes.string
}

export default CustomInput
