import React from 'react'
import Itemcard from './Itemcard'
import data from './data'
// import Cart from './Cart'
import { CartProvider} from "react-use-cart";
import { Link } from 'react-router-dom';


const ShowItem = () => {
 console.log(data.production)
  return (
    < >

    <CartProvider>
      
      <h1>All Items</h1>
      <section className='d-flex w-150 '>
        <div className='w-100 d-flex'>
          {data.production.map((item,index)=>{
            return (
              <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
            )
          })}
     
      </div>
      </section>
      <Link to="/cart">cart</Link>
      {/* <Cart/> */}
      
      </CartProvider>
    </>
  )
}

export default ShowItem