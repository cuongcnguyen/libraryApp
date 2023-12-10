import React, {useState, useEffect} from 'react'
import './ShopGridSidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faLocationDot, faPhone, faEnvelope, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import Products from './Products/Products';
import SideBar from './Sidebar/SideBar';
import { useShopGridSidebarProps } from '../App';
import ReactPaginate from 'react-paginate';
import Pagination from '../Components/Pagination';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Book } from '../Interface/interface';
import axios from 'axios';


// interface Props{
//     handleChange: any;
//     result:any;
//     handleInputSearch: any;
//     query: string;
// }

const booklandLogo = require('../images/shop-grid-sidebar-img/logo.png');

const ShopGridSidebar:React.FC = () => {
    const {handleChange,result,handleInputSearch,query, handleSelectedFilter} = useShopGridSidebarProps();

    // //Search and filter functionality
    // const [filter, setFilter] = useState({
    //     author: "",
    //     genre: "",
    //   });
    //   const [books, setBooks] = useState<Book>();
    
    //   const handleSelectedFilter = (type: string, data: string) => {
    //     if (type === "author") {
    //       setFilter((current) => ({ ...current, author: data }));
    //     } else {
    //       setFilter((current) => ({ ...current, genre: data }));
    //     }
    //   };
    
    //   const getBooks = async () => {
    //     var searchQuery = `q=${query}&${
    //       filter.author && `author=${filter.author}`
    //     }&${filter.genre && `genre=${filter.genre}`}`;
    
    //     await axios
    //       .get(`http://localhost:8000/books?${searchQuery}`)
    //       .then((res) => setBooks(res.data));
    //   };
    
    //   useEffect(() => {
    //     getBooks();
    //   }, [filter, query]);


    return (
        <div className='page-wrapper'>
            <Header />
            {/* Header ends, start of main page content */}
            <div className="bg-gray">
                <div className="container">
                    <div className="main-sidebar">
                        <div className="main-sidebar-sidebar">
                            {/* <SideBar handleChange={handleChange}/> */}
                            <SideBar />
                        </div>
                            
                        <div className="main-sidebar-main">
                            {/* <Products result={result}/> */}
                            <Products />

                            {/* ---------Pagination place--------------- */}
                            <Pagination />
                        </div>

                        
                    </div>
                </div>
            </div>
            
            
            {/* Main-sidebar ends, start of footer */}
            
            <Footer />
            
        </div>
    )
}

export default ShopGridSidebar