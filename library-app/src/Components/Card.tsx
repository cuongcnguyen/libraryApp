import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { Book } from '../Interface/interface'

interface Props{  
  image: string;
  title: string;
  genre: string;
  author: string;
  star: string;
  price: string;
  in_stock: number;
}

const Card:React.FC<Props> = (props)=> {
  const {image,title,genre,author,star, price,in_stock} = props;  
  return (
    <section className="card">
      <img className='card-img' src={image} alt={title}/>
      
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-genre">{genre}</p>
        <p className="card-author">{author}</p>
        
        
        <section className="card-review">
          <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' />
          
        </section>
        <section className="card-price">
          <div className="price">{price}</div>        
        </section>
        <p className="card-quantityInStock">Quantity In Stock: {in_stock}</p>

        <button className="card-addToCart btns">Add To Cart</button>

      </div>
    </section>
  )
}

export default Card;
