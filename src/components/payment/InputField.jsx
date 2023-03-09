import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './InputField.scss'
const InputField = ({ label, id, type, placeholder, icon }) => {
  return (
    <div className='input-field flex-col'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder && placeholder} />
      {icon && <div className="icon flex-row"><FontAwesomeIcon icon={faQuestion} /></div> }
    </div>
  )
}

export default InputField