import React from 'react'
import './Genre.scss'
import Input from '../../../Components/Input';


const Genre:React.FC = ()=> {  
  return (
    <div className='sidebar-card-wrapper'>
      <h3 className="sidebar-filter-title">By Genre</h3>

      <div className="sidebar-radio-container">
        <Input 
          
          value='Thriller'
          title='Thriller'
          name='test2'
          type='genre'
        />
        <Input 
          
          value='Sci-Fi'
          title='Sci-Fi'
          name='test2'
          type='genre'
        />
        <Input 
          
          value='Drama'
          title='Drama'
          name='test2'
          type='genre'
        />
        <Input 
          //handleChange={handleChange}
          value='Psychology'
          title='Psychology'
          name='test2'
          type='genre'
        />
      
      </div>
    </div>
  )
}

export default Genre;
