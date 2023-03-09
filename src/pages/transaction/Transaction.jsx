import Header from '../../components/header/Header'
import Payment from '../../components/payment/Payment'

import './Transaction.scss'

const Transaction = () => {
  return (
    <div className='transaction'>
      <Header headerClass="dark" />
      <div className="transaction-title">
        <h2>select payment method</h2>
        <hr />
      </div>
      <Payment />
    </div>
  )
}

export default Transaction