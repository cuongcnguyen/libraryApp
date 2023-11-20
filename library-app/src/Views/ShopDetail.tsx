import React from 'react'
import './ShopDetail.scss'
import './ShopGridSidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot, faPhone, faEnvelope, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'

const booklandLogo = require('../images/shop-grid-sidebar-img/logo.png');

interface Props{
  handleChange: any;
  handleInputSearch: any;
  query: string;
}


const ShopDetail:React.FC<Props> =(props) => {
  const {handleChange,handleInputSearch,query} = props;
  return (
    <div className='page-wrapper'>
      {/* ------------HEADER------------ */}
      <header>
        <div className="top-borderbottom">
            <div className="container">
                <div className="header-infobar">
                    <div className="header-infobar-logo">
                        <a href="">
                            <img src={booklandLogo} alt="" />                        
                        </a>                    
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
            </div>
        </div>
        
        
        {/* Main nav */}
        <div className="container">
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
        </div>
                
      </header>
      
      {/* ---------------MAIN CONTENT------------------ */}
      <div className="bg-gray">
            <section className="content">
                <div className="container">
                    {/* --------STRUCTURE OF THE SHOP GRID SIDEBAR PAGE-------- */}
                    {/* <div className="main-sidebar">
                        <div className="main-sidebar-sidebar">
                            <SideBar handleChange={handleChange}/>
                        </div>
                            
                        <div className="main-sidebar-main">
                            <Products result={result}/>
                        </div>
                    </div> */}

                    {/* -----------First row---------------- */}

                    <div className="row1">
                        <div className="col">
                            <div className="book-image">
                                <img src="/images/book3.jpg" alt="" />
                            </div>
                            <div className="book-content">
                                <div className="book-content-header">
                                    <h3>Hidden Potential</h3>
                                    <div className="book-content-header-rateShare">
                                        <div className="book-content-header-rate">
                                            <h6>4.0</h6>
                                        </div>
                                        <div className="book-content-header-share">
                                            <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} size='2xl' style={{color: "#3b5998"}} /></a></li>
                                            
                                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size='2xl' style={{color: "#0077b5",}} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: "#bc2f85",}} /></a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faYoutube} size='2xl' style={{color: "#db4439"}} /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="book-content-body">
                                    <div className="book-content-body-detail">
                                        <ul>
                                            <li>
                                                <div className="grayTitle">Writen by</div>
                                                <p>Adam Grant</p>
                                            </li>
                                            <li>
                                                <div className="grayTitle">Publisher</div>
                                                <p>Printarea Studios</p>
                                            </li>
                                            <li>
                                                <div className="grayTitle">Year</div>
                                                <p>2019</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                    <p className="text2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
                                    <div className="book-content-body-price">
                                        <h5>$54.78</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------------Second row--------------------- */}
                    <div className="row2">
                        <div className="book-descriptions">
                            <h3>Details Product</h3>
                            <div className="book-description-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>Hidden Potential</td>
                                        </tr>
                                        <tr>
                                            <th>Author</th>
                                            <td>Adam Grant</td>
                                        </tr>
                                        <tr>
                                            <th>Genre</th>
                                            <td>Psychology</td>
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            <td>$39.95</td>
                                        </tr>
                                        <tr>
                                            <th>Rent times</th>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <th>Position</th>
                                            <td>B1</td>
                                        </tr>
                                        <tr>
                                            <th>Quantity In Stock</th>
                                            <td>4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
        </div>

        

      {/* ---------------FOOTER----------------- */}
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
    </div>
  )
}

export default ShopDetail;