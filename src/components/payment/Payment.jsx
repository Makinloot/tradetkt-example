import { useState } from 'react'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import Form from './Form'
import Button from '../button/Button'

import './Payment.scss'

const Payment = () => {

  const [method, setMethod] = useState('credit')

  return (
    <div className="payment">
      <div className="payment-method flex-row">
        <div 
          className={method === 'credit' ? 'method active flex-col' : 'method flex-col'}
          onClick={() => setMethod('credit')}
        >
          <FontAwesomeIcon icon={faCreditCard} />
          <span>credit card</span>
        </div>
        <div 
          className={method === 'paypal' ? 'method active flex-col' : 'method flex-col'}
          onClick={() => setMethod('paypal')}
        >
          <FontAwesomeIcon icon={faPaypal} />
          <span>paypal</span>
        </div>
      </div>
      <Form />
      <div className="buttons flex-row">
        <Link to="/search">
          <Button value="cancel" btnClass="btn-white" />
        </Link>
        <Button value="confirm-payment" btnClass="btn-orange" />
      </div>
    </div>
  )
}

export default Payment