import React from 'react'
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

// interface Props{
//     handleChange: any;
//     result:any;
//     handleInputSearch: any;
//     query: string;
// }

const booklandLogo = require('../images/shop-grid-sidebar-img/logo.png');

const ShopGridSidebar:React.FC = () => {
    const {handleChange,result,handleInputSearch,query} = useShopGridSidebarProps();
    return (
        <div className='page-wrapper'>
            <Header />
            {/* Header ends, start of main page content */}
            <div className="bg-gray">
                <div className="container">
                    <div className="main-sidebar">
                        <div className="main-sidebar-sidebar">
                            <SideBar handleChange={handleChange}/>
                        </div>
                            
                        <div className="main-sidebar-main">
                            <Products result={result}/>

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