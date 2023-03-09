import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

import Header from "../../components/header/Header";
import "./Sell.scss";
import InputField from "../../components/payment/InputField";
import Button from "../../components/button/Button";

const Sell = () => {
  return (
    <div className="sell">
      <Header headerClass="dark" />
      <div className="sell-hero flex-col">
        <div className="blur"></div>
        <h2 className="hero-title">tickets for camp nou experience</h2>
        <span className="hero-location">
          <FontAwesomeIcon icon={faLocationPin} />
          camp nou, barcelona, spain
        </span>
      </div>
      <form className="sell-form">
        <h3 className="title">Sell a Ticket</h3>
        <div className="input-file flex-col">
          <FontAwesomeIcon icon={faCloudArrowUp} />
          <input type="file" name="" id="" />
        </div>
        <div className="input-container flex-row">
          <InputField id="buyer-pay" label="buyers pay" type="number"  />
          <InputField id="seller-recieve" label="you recieve" type="number"  />
        </div>
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms"> I agree to the terms of the Trade TKT arrangement</label>
        </div>
        <Button value="sell" btnClass="btn-blue" />
      </form>
    </div>
  );
};

export default Sell;
