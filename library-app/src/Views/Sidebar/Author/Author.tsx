import React from 'react'
import './Author.scss'
import Input from '../../../Components/Input';

interface Props{
  handleChange:any;
}

const Author:React.FC<Props> =(props)=> {
  const {handleChange} = props;
  return (
    <div className='sidebar-card-wrapper'>
      <h3 className="sidebar-filter-title">By Author</h3>

      <div className="sidebar-radio-container">
        
        <Input 
          handleChange={handleChange}
          value="Edward Lee"
          title="Edward Lee"
          name="test"
        />
        <Input 
          handleChange={handleChange}
          value="Adam Grant"
          title="Adam Grant"
          name="test"
        />
        <Input 
          handleChange={handleChange}
          value="Susan Abulhawa"
          title="Susan Abulhawa"
          name="test"
        />
        <Input 
          handleChange={handleChange}
          value="Nick Timiraos"
          title="Nick Timiraos"
          name="test"
        />
      </div>
      

    </div>
  )
}

export default Author;
