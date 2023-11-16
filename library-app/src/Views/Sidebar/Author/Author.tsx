import React from 'react'
import './Author.scss'

function Author() {
  return (
    <div className='sidebar-card-wrapper'>
      <h3 className="sidebar-filter-title">By Author</h3>

      <div className="sidebar-radio-container">
        <label className="sidebar-label-container">
          <input type="radio" name="a" id="" />          
          <div className="text">Edward Lee</div>          
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="a" id="" />          
          <div className="text">J. D. Robb</div>          
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="a" id="" />          
          <div className="text">Mary Beth Keane</div>          
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="a" id="" />          
          <div className="text">Stassi Schroeder</div>          
        </label>
      </div>
      

    </div>
  )
}

export default Author;
