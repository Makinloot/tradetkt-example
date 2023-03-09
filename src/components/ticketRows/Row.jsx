import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faX } from "@fortawesome/free-solid-svg-icons";

import Button from "../button/Button";
import { Link } from "react-router-dom";

const Row = ({ date, status, customer, purchased, price, icon }) => {
  return (
    <>
      <div className="row-item">
        <span>{date}</span>
      </div>
      <div className="row-item flex-row">
        <FontAwesomeIcon icon={status === 'verified' ? faCheckCircle : faX} color={status === 'verified' ? 'green' : 'red'} />
        <span>{status}</span>
      </div>
      <div className="row-item flex-row">
        <img src={icon} />
        <span>{customer}</span>
      </div>
      <div className="row-item">
        <span>{purchased}</span>
      </div>
      <div className="row-item">
        <span>{price}</span>
      </div>
      <div className="row-item flex-row">
        <Link to="/transaction">
          <Button value="buy" btnClass="btn-green" />
        </Link>
      </div>
    </>
  );
};

export default Row;
