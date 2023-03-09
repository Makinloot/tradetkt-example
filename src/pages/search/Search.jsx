import Ticket from "../../components/ticket/Ticket"
import Slider from '../../components/slider/Slider'

import { tickets } from "../../data"
import './Search.scss'
import Header from "../../components/header/Header"

const Search = () => {

  // return ticket cards
  const handleTickets = () => {
    const ticket = tickets.map(ticket => <Ticket key={ticket.id} {...ticket} />)
    return ticket;
  }

  return (
    <div className="search">
      <Header headerClass="dark" />
      <div className="container">
        <div className="search-wrapper">
          <div className="months">
            <Slider />
          </div>
          <div className="tickets">
            {handleTickets()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search