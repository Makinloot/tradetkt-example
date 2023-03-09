import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faCartShopping } from "@fortawesome/free-solid-svg-icons"

import './Header.scss'

const Header = ({ headerClass }) => {
  return (
    <header className={headerClass ? 'header dark' : 'header'}>
      <div className="container">
        <div className="header-wrapper">
          <div className="header-upper flex-row">
            <div className="header-upper-contact flex-row">
              <div className="upper-item flex-row">
                <FontAwesomeIcon icon={faPhone} />
                <span>(+995) 555 667788</span>
              </div>
              <div className="upper-item flex-row">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>tickets@ticket.ge</span>
              </div>
            </div>
            <div className="header-upper-login flex-row">
              <Link to="#">sign in</Link>
              <hr />
              <Link to="#">sign up</Link>
            </div>
          </div>
          <div className="header-main flex-row">
            <h1>TradeTKT</h1>
            <div className="flex-row">
              <nav className="header-main-menu flex-row">
                <Link to="/">home</Link>
                <Link to="/search">search</Link>
                <Link to="#">news</Link>
                <Link to="#">about</Link>
                <Link to="#">contact</Link>
              </nav>
              <div className="cart flex-row">
                <strong>0</strong>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
          </div>
          <hr className="header-bottom-line" />
        </div>
      </div>
    </header>
  )
}

export default Header