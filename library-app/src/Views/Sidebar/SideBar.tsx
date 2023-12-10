import React from 'react'
import './SideBar.scss'
import Author from './Author/Author';
import Genre from './Genre/Genre';
import { useSideBarProps } from '../../App';

// interface Props{
//   //handleChange:any;
//   handleSelectedFilter:any;
// }

const SideBar:React.FC =() => {
  const {handleResetFilter} = useSideBarProps();
  return (
    <>
        <div className="sidebar-wrapper">
            <div className="sidebar-title">Filter Option</div>
            <Author />
            <Genre />
            <button className="sidebar-resetFilter btns" onClick={handleResetFilter}>Reset Filter</button>
        </div>
        
    </>
  )
}

export default SideBar;