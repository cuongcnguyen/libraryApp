import React from 'react'
import './SideBar.scss'
import Author from './Author/Author';
import Genre from './Genre/Genre';

interface Props{
  handleChange:any;
}

const SideBar:React.FC<Props> =(props) => {
  const {handleChange} = props;
  return (
    <>
        <div className="sidebar-wrapper">
            <div className="sidebar-title">Filter Option</div>
            <Author handleChange={handleChange}/>
            <Genre handleChange={handleChange} />
            <button className="sidebar-resetFilter btns">Reset Filter</button>
        </div>
        
    </>
  )
}

export default SideBar;