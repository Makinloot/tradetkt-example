import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

import './Home.scss'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className="bg"></div>
        <Header />
        <div className="home-hero">
          <div className="container">
            <div className="home-hero-wrapper flex-col">
              <strong className="title">kayakata on 7 <span>live concert</span></strong>
              <strong className="location">
                <FontAwesomeIcon icon={faLocationPin} />
                dinamo, tbilisi, georgia
              </strong>
              <div className="buttons flex-col">
                <Link to="/search">
                  <Button value="purchase tickets now" btnClass="btn-orange" />
                </Link>
                <Link to="/sell">
                  <Button value="sell tickets now" btnClass="btn-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home