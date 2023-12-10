import React from 'react'
import { useInputProps } from '../App';

interface Props{  
  value: any;
  title: any;
  name: any;
  type: string
}

const Input:React.FC<Props> =(props) =>{
  const {value,title,name, type} = props;
  const {handleSelectedFilter} = useInputProps();

  return (
    <label className="sidebar-label-container">
        <input onChange={() => handleSelectedFilter(type, value)} type="radio" value={value} name={name} id="" />          
        <div className="text">{title}</div>          
    </label>
  )
}

export default Input;
