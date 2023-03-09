import Row from './Row'

import { rowTickets } from '../../data'

import './TicketRows.scss'
const TicketRows = () => {
  const handleRows = () => {
    const row = rowTickets.map(row => <Row {...row} />)
    return row
  }
  return (
    <div className='row-wrapper'>
      <div className='row-container'>
        <div className="heading">date</div>
        <div className="heading">status</div>
        <div className="heading">customer</div>
        <div className="heading">purchased</div>
        <div className="heading">price</div>
        <div className="heading">buy</div>
      </div>
      <div className="row-container">
        {handleRows()}
      </div>
    </div>
  )
}

export default TicketRows