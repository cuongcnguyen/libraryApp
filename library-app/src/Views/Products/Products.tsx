import React from 'react'
import './Products.scss'
import Card from '../../Components/Card';
import { Book } from '../../Interface/interface';
import { useProductProps } from '../../App';


const Products:React.FC = ()=> {
  const {books}= useProductProps();
  return (
    <>
      <section className="card-container">        
      {books?.map((book: Book, index: number) => {
        return (
          <Card
            key={index}
            id={book.id}
            image={book.image}
            title={book.title}
            genre={book.genre}
            author={book.author}
            star={book.star}
            price={book.price}
            in_stock={book.in_stock}
          />
        );
      })}       
      </section>
    </>
  )
}

export default Products;
