import InputField from './InputField'

import './Form.scss'
import Button from '../button/Button'

const Form = () => {
  return (
    <div className="form">
      <hr className="upper-line line" />
      <hr className="bottom-line line" />
      <form action="#">
        <InputField id="name" label="name on card" />
        <div className="number-fields">
          <InputField id="card-number" label="card number" type="number" placeholder="0000 0000 0000 0000" />
          <InputField id="cvv-number" label="cvv" type="number" icon={true} />
        </div>
        <div className="date-fields">
          <InputField id="month-date" label="month" type="date" />
          <InputField id="year-date" label="year" type="date" />
        </div>
      </form>
    </div>
  )
}

export default Form