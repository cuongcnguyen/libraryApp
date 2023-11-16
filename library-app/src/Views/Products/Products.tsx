import React from 'react'
import './Products.scss'
import Card from '../../Components/Card';

interface Props{
  result:any;
}

const Products:React.FC<Props> = (props)=> {
  const {result}= props;
  return (
    <>
      <section className="card-container">        
        {result}        
      </section>
    </>
  )
}

export default Products;
