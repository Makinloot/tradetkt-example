import Ticket from "../../components/ticket/Ticket"

import { tickets } from "../../data"
import './Search.scss'

const Search = () => {

  // return ticket cards
  const handleTickets = () => {
    const ticket = tickets.map(ticket => <Ticket key={ticket.id} {...ticket} />)
    return ticket;
  }

  return (
    <div className="search">
      <div className="container">
        <div className="search-wrapper">
          <div className="tickets">
            {handleTickets()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search