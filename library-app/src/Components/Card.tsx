import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { Book } from '../Interface/interface'
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';

interface Props{  
  id: number;
  image: string;
  title: string;
  genre: string;
  author: string;
  star: string;
  price: string;
  in_stock: number;
}

const Card:React.FC<Props> = (props)=> {
  const {id,image,title,genre,author,star, price,in_stock} = props;  
  return (
    <section className="card" >
      <Link to={`/shopDetails/${id}`}>
        <img className='card-img' src={image} alt={title}/>
        
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p className="card-genre">{genre}</p>
          <p className="card-author">{author}</p>                
          {/* <section className="card-review">
            <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' />
            
          </section> */}
          <section className="card-price">
            <div className="price">{formatCurrency(Number(price))}</div>        
          </section>
          {/* <p className="card-quantityInStock">Quantity In Stock: {in_stock}</p> */}
          
          {/* <button className="card-addToCart btns">Add To Cart</button> */}

        </div>
      </Link>
      
    </section>
  )
}

export default Card;
