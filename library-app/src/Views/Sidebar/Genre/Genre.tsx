import React from 'react'
import './Genre.scss'
import Input from '../../../Components/Input';

interface Props{
  handleChange:any;
}

const Genre:React.FC<Props> = (props)=> {
  const {handleChange} = props;
  return (
    <div className='sidebar-card-wrapper'>
      <h3 className="sidebar-filter-title">By Genre</h3>

      <div className="sidebar-radio-container">
        <Input 
          handleChange={handleChange}
          value='Thriller'
          title='Thriller'
          name='test2'
        />
        <Input 
          handleChange={handleChange}
          value='Sci-Fi'
          title='Sci-Fi'
          name='test2'
        />
        <Input 
          handleChange={handleChange}
          value='Drama'
          title='Drama'
          name='test2'
        />
        <Input 
          handleChange={handleChange}
          value='Psychology'
          title='Psychology'
          name='test2'
        />
      
      </div>
    </div>
  )
}

export default Genre;
