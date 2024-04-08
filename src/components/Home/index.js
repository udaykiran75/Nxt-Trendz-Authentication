import './index.css'

import Header from '../Header'

const Home = () => (
  <div className="home-bg-container">
    <div className="logo-logout-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-lg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        className="home-logout"
        alt="nav logout"
      />
      <ul className="nav-items">
        <li>
          <button className="nav-text nav-btn">Home</button>
        </li>
        <li>
          <button className="nav-text nav-btn">Products</button>
        </li>
        <li>
          <button className="nav-text nav-btn">Cart</button>
        </li>
        <li>
          <button className="nav-button">Logout</button>
        </li>
      </ul>
    </div>
    <Header />
    <div className="body-container-lg">
      <div className="home-body-con">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="clothes-image"
          alt="clothes that get you noticed"
        />
        <p className="clothes-text">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exiting fashion i
          your own way.
        </p>
        <button className="shopnow-button">Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="clothes-image-lg"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)
export default Home
