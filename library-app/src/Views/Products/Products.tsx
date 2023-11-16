import React from 'react'
import './Products.scss'
import {AiFillStar} from 'react-icons/ai'

function Products() {
  return (
    <>
      <section className="card-container">        
        <section className="card">
          <img className='card-img' src="https://bookland.dexignzone.com/xhtml/images/books/grid/book4.jpg" alt="a book" />
          <div className="card-details">
            <h3 className="card-title">Book</h3>
            <section className="card-review">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              
            </section>
            <section className="card-price">
              <div className="price">$59.95</div>        
            </section>
          </div>
        </section>
        <section className="card">
          <img className='card-img' src="https://bookland.dexignzone.com/xhtml/images/books/grid/book4.jpg" alt="a book" />
          <div className="card-details">
            <h3 className="card-title">Book</h3>
            <section className="card-review">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              
            </section>
            <section className="card-price">
              <div className="price">$59.95</div>        
            </section>
          </div>
        </section>
        <section className="card">
          <img className='card-img' src="https://bookland.dexignzone.com/xhtml/images/books/grid/book4.jpg" alt="a book" />
          <div className="card-details">
            <h3 className="card-title">Take Out Tango</h3>
            <p className="card-genre">Drama</p>
            <p className="card-author">Edward Lee</p>
            
            
            <section className="card-review">
              <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' /> <AiFillStar className='rating-stars' />
              
            </section>
            <section className="card-price">
              <div className="price">$59.95</div>        
            </section>
            <p className="card-quantityInStock">Quantity In Stock: </p>

            <button className="card-addToCart btns">Add To Cart</button>

          </div>
        </section>
        <section className="card">
          <img className='card-img' src="https://bookland.dexignzone.com/xhtml/images/books/grid/book4.jpg" alt="a book" />
          <div className="card-details">
            <h3 className="card-title">Book</h3>
            <section className="card-review">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              
            </section>
            <section className="card-price">
              <div className="price">$59.95</div>        
            </section>
          </div>
        </section>
        <section className="card">
          <img className='card-img' src="https://bookland.dexignzone.com/xhtml/images/books/grid/book4.jpg" alt="a book" />
          <div className="card-details">
            <h3 className="card-title">Book</h3>
            <section className="card-review">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              
            </section>
            <section className="card-price">
              <div className="price">$59.95</div>        
            </section>
          </div>
        </section>
        <section className="card">
          <img className='card-img' src="https://bookland.dexignzone.com/xhtml/images/books/grid/book4.jpg" alt="a book" />
          <div className="card-details">
            <h3 className="card-title">Book</h3>
            <section className="card-review">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              
            </section>
            <section className="card-price">
              <div className="price">$59.95</div>        
            </section>
          </div>
        </section>
      </section>
    </>
  )
}

export default Products;
