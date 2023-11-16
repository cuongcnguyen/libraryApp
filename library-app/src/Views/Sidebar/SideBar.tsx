import React from 'react'
import './SideBar.scss'
import Author from './Author/Author';
import Genre from './Genre/Genre';

function SideBar() {
  return (
    <>
        <div className="sidebar-wrapper">
            <div className="sidebar-title">Filter Option</div>
            <Author />
            <Genre />
            <button className="sidebar-resetFilter btns">Reset Filter</button>
        </div>
        
    </>
  )
}

export default SideBar;