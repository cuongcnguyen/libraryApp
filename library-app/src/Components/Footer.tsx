import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot, faPhone, faEnvelope, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { useShopGridSidebarProps } from '../App';
import ReactPaginate from 'react-paginate';
import Pagination from '../Components/Pagination';
import { Link } from 'react-router-dom';

const booklandLogo = require('../images/shop-grid-sidebar-img/logo.png');

function Footer() {
  return (
    <footer>
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-container-logo">
                            <img src={booklandLogo} alt="" />    
                            <p>Bookland is a Book Store Ecommerce Website Template by DexignZone lorem ipsum dolor sit</p>
                            <div className='footer-container-logo-smallIcon'>
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} size='2xl' style={{color: "#eaa451",}} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faYoutube} size='2xl' style={{color: "#eaa451",}} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size='2xl' style={{color: "#eaa451",}} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: "#eaa451",}} /></a></li>
                                </ul>
                            </div>
                        </div>            
                        <div className="footer-container-ourlinks">
                            <div className="footer-container-ourlinks title">Our Links</div>
                            <ul className="footer-container-ourlinks-list">
                                <li className="footer-container-ourlinks-list-item"><a href="#">About Us</a></li>
                                <li className="footer-container-ourlinks-list-item"><a href="#">Contact Us</a></li>
                                <li className="footer-container-ourlinks-list-item"><a href="#">Privacy Policy</a></li>
                                <li className="footer-container-ourlinks-list-item"><a href="#">Pricing Table</a></li>
                                <li className="footer-container-ourlinks-list-item"><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="footer-container-bookland">
                            <div className="footer-container-bookland title">Bookland ?</div>
                            <ul className="footer-container-bookland-list">
                                <li className="footer-container-bookland-list-item"><a href="#">Bookland</a></li>
                                <li className="footer-container-bookland-list-item"><a href="#">Services</a></li>
                                <li className="footer-container-bookland-list-item"><a href="#">Book Details</a></li>
                                <li className="footer-container-bookland-list-item"><a href="#">Blog Details</a></li>
                                <li className="footer-container-bookland-list-item"><a href="#">Shop</a></li>
                            </ul>
                        </div>
                        <div className="footer-container-resources">
                            <div className="footer-container-resources title">Resources</div>
                            <ul className="footer-container-resources-list">
                                <li className="footer-container-resources-list-item"><a href="#">Download</a></li>
                                <li className="footer-container-resources-list-item"><a href="#">Help Center</a></li>
                                <li className="footer-container-resources-list-item"><a href="#">Shop Cart</a></li>
                                <li className="footer-container-resources-list-item"><a href="#">Login</a></li>
                                <li className="footer-container-resources-list-item"><a href="#">Partner</a></li>
                            </ul>
                        </div>
                        <div className="footer-container-getintouch">
                            <div className="footer-container-getintouch title">Get In Touch With Us</div>
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
                </div>
                
    </footer>
  )
}

export default Footer;
