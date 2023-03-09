import { Link } from 'react-router-dom'
import Button from '../button/Button'
import './Ticket.scss'

const Ticket = ({ day, month, year, title, location, background }) => {
  return (
    <div className="ticket flex-col">
      <img src={background} />
      <div className="date flex-col">
        <strong>{day}</strong>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="description flex-row">
        <div className='flex-col'>
          <h4>{title}</h4>
          <span>{location}</span>
        </div>
        <Link to="/transaction">
          <Button value="get ticket" btnClass="btn-orange" />
        </Link>
      </div>
      <div className="bottom-shadow"></div>
    </div>
  )
}

export default Ticket