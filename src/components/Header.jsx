import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faCartShopping } from "@fortawesome/free-solid-svg-icons"

import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-upper flex-row">
            <div className="header-upper-contact flex-row">
              <div className="upper-item flex-row">
                <FontAwesomeIcon icon={faPhone} color="green" />
                <span>(+995) 555 667788</span>
              </div>
              <div className="upper-item flex-row">
                <FontAwesomeIcon icon={faEnvelope} color="green" />
                <span>tickets@ticket.ge</span>
              </div>
            </div>
            <div className="header-upper-login flex-row">
              <span>sign in</span>
              <hr />
              <span>sign up</span>
            </div>
          </div>
          <div className="header-main flex-row">
            <h1>TradeTKT</h1>
            <div className="flex-row">
              <nav className="header-main-menu flex-row">
                <a href="#">home</a>
                <a href="#">search</a>
                <a href="#">news</a>
                <a href="#">about</a>
                <a href="#">contact</a>
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