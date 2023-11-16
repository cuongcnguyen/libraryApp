import React from 'react'
import './Genre.scss'
import Input from '../../../Components/Input';

function Genre() {
  return (
    <div className='sidebar-card-wrapper'>
      <h3 className="sidebar-filter-title">By Genre</h3>

      <div className="sidebar-radio-container">
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  )
}

export default Genre;
