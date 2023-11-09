import React from 'react'
import './ShopGridSidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


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
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="header-infobar-rightnav"></div>
            </div>
        </header>

        <div className="main-content"></div>
        <footer></footer>
    </div>
  )
}

export default ShopGridSidebar