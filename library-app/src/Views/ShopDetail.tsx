import React, {useState, useEffect} from 'react'
import './ShopDetail.scss'
import './ShopGridSidebar.scss'
import './Products/Products.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot, faPhone, faEnvelope, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { useShopDetailProps } from '../App'
import { Link, useParams } from 'react-router-dom'
import { Book } from '../Interface/interface'
import axios from 'axios'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { formatCurrency } from '../utils/formatCurrency'

const booklandLogo = require('../images/shop-grid-sidebar-img/logo.png');

// interface Props{
//   handleChange: any;
//   handleInputSearch: any;
//   query: string;
// }


const ShopDetail:React.FC =() => {
  const {handleInputSearch,query, increaseCartQuantity} = useShopDetailProps();

    // -----------Grab id from URL with useParams-----------------
    // Destructuring id to grab only the value not the key-value object
    const {id} = useParams<{id:string}>();
    const [books, setBooks] = useState<Book | null>(null);
    // -----------Call API only when id changes---------------------
    useEffect(()=>{
        const getBooks = async() =>{
            const res = await axios.get(`https://libserver.onrender.com/books/${id}`);
            setBooks(res.data);
        } 
        getBooks();
    },[id])

  return (
    <div className='page-wrapper'>
      {/* ------------HEADER------------ */}
        <Header />
      
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
                                {/* <img src="/images/book3.jpg" alt="" /> */}
                                <img src={books?.image} alt="" />
                            </div>
                            <div className="book-content">
                                <div className="book-content-header">
                                    <h3>{books?.title}</h3>
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
                                                <p>{books?.author}</p>
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
                                        <h5>{formatCurrency(Number(books?.price))}</h5>
                                        <button className="card-addToCart btns" onClick={()=>increaseCartQuantity(Number(id))}>Add To Cart</button>
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
                                            <td>{books?.title}</td>
                                        </tr>
                                        <tr>
                                            <th>Author</th>
                                            <td>{books?.author}</td>
                                        </tr>
                                        <tr>
                                            <th>Genre</th>
                                            <td>{books?.genre}</td>
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            <td>{formatCurrency(Number(books?.price))}</td>
                                        </tr>
                                        <tr>
                                            <th>Rent times</th>
                                            <td>{books?.rent_times}</td>
                                        </tr>
                                        <tr>
                                            <th>Position</th>
                                            <td>{books?.position}</td>
                                        </tr>
                                        <tr>
                                            <th>Quantity In Stock</th>
                                            <td>{books?.in_stock}</td>
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
      <Footer />
    </div>
  )
}

export default ShopDetail;