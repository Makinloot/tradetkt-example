import Ticket from "../../components/ticket/Ticket";
import Slider from "../../components/slider/Slider";

import { tickets } from "../../data";
import "./Search.scss";
import Header from "../../components/header/Header";
import TicketRows from "../../components/ticketRows/TicketRows";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const Search = () => {
  // return ticket cards
  const handleTickets = () => {
    const ticket = tickets.map((ticket) => (
      <Ticket key={ticket.id} {...ticket} />
    ));
    return ticket;
  };

  return (
    <div className="search">
      <Header headerClass="dark" />
      <div className="container">
        <div className="search-wrapper">
          <div className="months">
            <Slider />
          </div>
          <div className="tickets">{handleTickets()}</div>
        </div>
        <h2 className="purchase-title">purchase ticket</h2>
        <Link to="/sell">
          <Button value="sell a ticket" btnClass="btn-blue" />
        </Link>
      </div>
      <TicketRows />
    </div>
  );
};

export default Search;
