import React from 'react'
import './Author.scss'
import Input from '../../../Components/Input';

function Author() {
  return (
    <div className='sidebar-card-wrapper'>
      <h3 className="sidebar-filter-title">By Author</h3>

      <div className="sidebar-radio-container">
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
      

    </div>
  )
}

export default Author;
