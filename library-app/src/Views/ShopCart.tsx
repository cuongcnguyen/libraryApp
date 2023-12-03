import React, {useState, useEffect} from 'react'
import './ShopDetail.scss'
import './ShopGridSidebar.scss'
import './ShopCart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot, faPhone, faEnvelope, faCartShopping, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { useShopCartProps, useShopDetailProps } from '../App'
import { Link, useParams } from 'react-router-dom'
import { Book } from '../Interface/interface'
import axios from 'axios'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { formatCurrency } from '../utils/formatCurrency'

const booklandLogo = require('../images/shop-grid-sidebar-img/logo.png');
const ShopCart:React.FC = () => {
    const {handleInputSearch, query, getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart, resultCart, cartItems, allBooks} = useShopCartProps();
    
    
  return (
    <div className='page-wrapper'>
        {/* ------------HEADER------------ */}
        <Header />

        {/* ------------------MAIN CONTENT------------------ */}
        <div className="bg-gray">
            <div className="cart-block">
                <h1>Cart</h1>
            </div>
            <div className="cart-content">
                <div className="container">
                    <div className="table-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Book name</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            
                                
                            <tbody>
                                {resultCart}    
                            </tbody>
                                                                
                                {/* <tr>
                                    <td className="book-item-name">Battle Drive</td>
                                    <td className='book-item-unitPrice'>$28.00</td>
                                    <td className='book-item-quantity'>
                                        <div className="change-quantity">
                                            <button>-</button>
                                            <span>0</span>
                                            <button>+</button>
                                        </div>
                                    </td> 
                                    <td className='book-item-total'>$28.00</td>
                                    <td className='book-item-close'>
                                        <button className="bg">
                                            <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />   
                                        </button>                                         
                                    </td>                                   
                                </tr>
                                <tr>
                                    <td className="book-item-name">Battle Drive</td>
                                    <td className='book-item-unitPrice'>$28.00</td>
                                    <td className='book-item-quantity'>
                                        <div className="change-quantity">
                                            <button>-</button>
                                            <span>0</span>
                                            <button>+</button>
                                        </div>
                                    </td> 
                                    <td className='book-item-total'>$28.00</td>
                                    <td className='book-item-close'>
                                        <button className="bg">
                                            <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />   
                                        </button>                                         
                                    </td>                                   
                                </tr>
                                <tr>
                                    <td className="book-item-name">Battle Drive</td>
                                    <td className='book-item-unitPrice'>$28.00</td>
                                    <td className='book-item-quantity'>
                                        <div className="change-quantity">
                                            <button>-</button>
                                            <span>0</span>
                                            <button>+</button>
                                        </div>
                                    </td> 
                                    <td className='book-item-total'>$28.00</td>
                                    <td className='book-item-close'>
                                        <button className="bg">
                                            <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />   
                                        </button>                                         
                                    </td>                                   
                                </tr> */}
                                
                            
                        </table>
                    </div>

                    <div className="table-total-layout">
                        <div className="table-total">
                            <h4 className="total-title">CART TOTAL</h4>
                            <table className="total-board">
                                <tr>
                                    <td>Shipping</td>
                                    <td>Free Shipping</td>
                                </tr>
                                <tr>
                                    <td>Coupon</td>
                                    <td>$0.00</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>
                                        {formatCurrency(cartItems.reduce((total,cartItem) =>{
                                            const item = allBooks.find(i => i.id === cartItem.id)
                                            return total + ( Number(item?.price)  || 0 ) *cartItem.quantity
                                        },0)
                                        )}
                                    </td>
                                </tr>
                            </table>
                            <div className="total-checkout">
                                <a href="#" type='button'>Checkout</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* ---------------FOOTER----------------- */}        
        <Footer />

    </div>
  )
}

export default ShopCart;