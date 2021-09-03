import PropTypes from 'prop-types'

import '../../auth/auth/index'

const CustomInput = ({ type, name, value, text, error, onChange }) => (
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

export default CustomInput

CustomInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
}
