import React from 'react'
import './ShopGridSidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot, faPhone, faEnvelope, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'

const booklandLogo = require('../images/shop-grid-sidebar-img/logo.png');

const ShopGridSidebar = () => {
  return (
    <div className='page-container'>
        <header>
            <div className="header-infobar">
                <div className="header-infobar-logo">
                    <a href="">
                        <img src={booklandLogo} alt="" />                        
                    </a>                    
                </div>
                <div className="header-infobar-searchbar">
                    
                    <input type="text" placeholder='Search for books'/>
                    <button type="button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#1a1668",}} />
                    </button>                
                    
                </div>
                <div className="header-infobar-rightnav">
                    <ul className='header-infobar-rightnav-list'>
                        <li className='header-infobar-rightnav-list-item'>
                            {/* Heart icon */}
                            <a href="#">
                                <FontAwesomeIcon icon={faHeart} size="2xl" style={{color: "#1a1668",}} />
                            </a>
                        </li>
                        <li className='header-infobar-rightnav-list-item'>
                            {/* Shopping cart item */}
                            <a href="#">
                                <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#1a1668",}} />
                            </a>
                        </li>
                        <li className='header-infobar-rightnav-list-item'>
                            {/* User icon */}
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} size="2xl" style={{color: "#1a1668",}} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main nav */}
            <div className="header-nav">
                <div className="header-nav-left">
                    <ul className="header-nav-left-list">
                        <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">Home</a></li>
                        <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">About Us</a></li>
                        <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">Pages</a></li>
                        <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">Shop</a></li>
                        <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">Blog</a></li>
                        <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">Contact Us</a></li>
                    </ul>
                </div>
                <div className="header-nav-rightBtn">
                    <button>Get In Touch</button>
                </div>
            </div>
        </header>
        {/* Header ends, start of main page content */}
        <div className="main-sidebar">
            <div className="main-sidebar-sidebar"></div>
            <div className="main-sidebar-main"></div>
        </div>
        {/* Main-sidebar ends, start of footer */}
        
        <footer>
            <div className="footer-container">
                <div className="footer-container-logo">
                    <img src={booklandLogo} alt="" />    
                    <p>Bookland is a Book Store Ecommerce Website Template by DexignZone lorem ipsum dolor sit</p>
                    <div className='footer-container-logo-smallIcon'>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} style={{color: "#eaa451",}} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faYoutube} style={{color: "#eaa451",}} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} style={{color: "#eaa451",}} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} style={{color: "#eaa451",}} /></a></li>
                        </ul>
                    </div>
                </div>            
                <div className="footer-container-ourlinks">
                    <div className="footer-container-ourlinks-title">Our Links</div>
                    <ul className="footer-container-ourlinks-list">
                        <li className="footer-container-ourlinks-list-item"><a href="#">About Us</a></li>
                        <li className="footer-container-ourlinks-list-item"><a href="#">Contact Us</a></li>
                        <li className="footer-container-ourlinks-list-item"><a href="#">Privacy Policy</a></li>
                        <li className="footer-container-ourlinks-list-item"><a href="#">Pricing Table</a></li>
                        <li className="footer-container-ourlinks-list-item"><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-container-bookland">
                    <div className="footer-container-bookland-title">Bookland ?</div>
                    <ul className="footer-container-bookland-list">
                        <li className="footer-container-bookland-list-item"><a href="#">Bookland</a></li>
                        <li className="footer-container-bookland-list-item"><a href="#">Services</a></li>
                        <li className="footer-container-bookland-list-item"><a href="#">Book Details</a></li>
                        <li className="footer-container-bookland-list-item"><a href="#">Blog Details</a></li>
                        <li className="footer-container-bookland-list-item"><a href="#">Shop</a></li>
                    </ul>
                </div>
                <div className="footer-container-resources">
                    <div className="footer-container-resources-title">Resources</div>
                    <ul className="footer-container-resources-list">
                        <li className="footer-container-resources-list-item"><a href="#">Download</a></li>
                        <li className="footer-container-resources-list-item"><a href="#">Help Center</a></li>
                        <li className="footer-container-resources-list-item"><a href="#">Shop Cart</a></li>
                        <li className="footer-container-resources-list-item"><a href="#">Login</a></li>
                        <li className="footer-container-resources-list-item"><a href="#">Partner</a></li>
                    </ul>
                </div>
                <div className="footer-container-getintouch">
                    <div className="footer-container-getintouch-title">Get In Touch With Us</div>
                    <ul className="footer-container-getintouch-list">
                        <li className="footer-container-getintouch-list-item">
                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#eaa451",}} />
                            <div>832  Thompson Drive, San Fransisco CA 94107,US</div>
                        </li>
                        <li className="footer-container-getintouch-list-item">
                            <FontAwesomeIcon icon={faPhone} style={{color: "#eaa451",}} />
                            <div>+123 345123 556 <br />
							    +123 345123 556</div>
                        </li>
                        <li className="footer-container-getintouch-list-item">
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#eaa451",}} />
                            <div>support@bookland.id <br />
                                info@bookland.id</div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default ShopGridSidebar