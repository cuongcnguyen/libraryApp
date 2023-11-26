
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot, faPhone, faEnvelope, faCartShopping, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { useShopCartProps, useShopDetailProps } from '../App'
import { Link, useParams } from 'react-router-dom'
import { Book } from '../Interface/interface'
import axios from 'axios'
import { formatCurrency } from '../utils/formatCurrency';

interface CartItemProps{
    id:number
    quantity: number
    library: Book[]
}

const CartItem = ({id,quantity,library}: CartItemProps) => {
  const { increaseCartQuantity, decreaseCartQuantity,removeFromCart,cartQuantity } = useShopCartProps(); 
    const item = library.find(i => i.id === id)
    console.log(item);    
    if (item == null) return null
    const itemTotalPrice = Number((Number(item.price) * quantity).toFixed(2));
  const itemTotalPriceCurrency = formatCurrency(itemTotalPrice);
  return (
    
    <tr>
                    <td className="book-item-name">{item.title}</td>
                    <td className='book-item-unitPrice'>{formatCurrency(Number(item.price))}</td>
                    <td className='book-item-quantity'>
                        <div className="change-quantity">
                            <button onClick={()=>decreaseCartQuantity(id)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={()=>increaseCartQuantity(id)}>+</button>
                        </div>
                    </td> 
                    <td className='book-item-total'>{itemTotalPriceCurrency}</td>
                    <td className='book-item-close'>
                        <button className="bg" onClick={()=>removeFromCart(id)}>
                            <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />   
                        </button>                                         
                    </td>                                   
    </tr>
    
    
  )
}

export default CartItem
