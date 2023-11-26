import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot, faPhone, faEnvelope, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { useShopCartProps, useShopGridSidebarProps } from '../App';
import ReactPaginate from 'react-paginate';
import Pagination from '../Components/Pagination';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const booklandLogo = require('../images/shop-grid-sidebar-img/logo.png');

function Header() {
    const {handleChange,result,handleInputSearch,query} = useShopGridSidebarProps();
    const {cartQuantity} = useShopCartProps();
    
  return (
    <header>
                <div className="top-borderbottom">
                    <div className="container">
                        <div className="header-infobar">
                            <div className="header-infobar-logo">
                                <Link to={'/'}>
                                    <img src={booklandLogo} alt="" />                        
                                </Link>
                                                                                   
                            </div>
                            <div className="header-infobar-searchbar">
                                
                                <input onChange={handleInputSearch} value={query} type="text" placeholder='Search for books'/>
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
                                        <div className="cart">
                                            <Link to={'/shopCart'}>
                                                
                                                <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#1a1668",}} />
                                                
                                                {cartQuantity > 0 && (
                                                    <div className="cartNoti">
                                                        {cartQuantity}
                                                    </div>
                                                )}
                                                
                                            </Link>
                                        </div>
                                        
                                        
                                    </li>
                                    <li className='header-infobar-rightnav-list-item'>
                                        {/* User icon */}
                                        <Link to={'/signup'}>
                                            <FontAwesomeIcon icon={faUser} size="2xl" style={{color: "#1a1668",}} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                {/* Main nav */}
                <div className="container">
                    <div className="header-nav">
                        <div className="header-nav-left">
                            <ul className="header-nav-left-list">
                                {/* <li className="header-nav-left-list-item"><Link to={`/`}><a href="#" className="header-nav-left-list-item-link">Home</a></Link></li> */}
                                <li className="header-nav-left-list-item"><Link to={'/'}>Home</Link></li>
                                <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">About Us</a></li>
                                <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">Pages</a></li>
                                <li className="header-nav-left-list-item"><Link to={'/'}>Shop</Link></li>
                                <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">Blog</a></li>
                                <li className="header-nav-left-list-item"><a href="#" className="header-nav-left-list-item-link">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="header-nav-rightBtn">
                            <button>Get In Touch</button>
                        </div>
                    </div>
                </div>
                
    </header>
  )
}

export default Header;
