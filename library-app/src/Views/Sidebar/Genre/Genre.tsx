import React from 'react'
import './Genre.scss'

function Genre() {
  return (
    <div className='sidebar-card-wrapper'>
      <h3 className="sidebar-filter-title">By Genre</h3>

      <div className="sidebar-radio-container">
        <label className="sidebar-label-container">
          <input type="radio" name="a" id="" />          
          <div className="text">Drama</div>          
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="a" id="" />          
          <div className="text">Sci-Fi</div>          
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="a" id="" />          
          <div className="text">Psychology</div>          
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="a" id="" />          
          <div className="text">Thriller</div>          
        </label>
      </div>
    </div>
  )
}

export default Genre;
