import React from 'react'

interface Props{
  handleChange: any;
  value: any;
  title: any;
  name: any;
}

const Input:React.FC<Props> =(props) =>{
  const {handleChange, value,title,name} = props;
  return (
    <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} id="" />          
        <div className="text">{title}</div>          
    </label>
  )
}

export default Input;
