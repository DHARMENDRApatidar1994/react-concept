import React from 'react'
import  {useCart} from "react-use-cart";
import data from './data';



const Cart = () => {
    const { isEmpty, totalUniqueItems,items, totalItems,cartTotal,updateItemQuantity,
    removeItem,emptyCart, } = useCart();
    if(isEmpty) return <h2>Your Cart Is Empty</h2>
  return (
    <section>
    <div>
        <div>
            <h5>Cart ({totalUniqueItems}),totalItems:({totalItems})</h5>
            <table className='table table-light table-hover m-0'>
                <tbody>
                    {data.production.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height:'6rem'}} alt="" />
                                </td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>Quantity ({item.quantity})</td>
                                <button onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <button onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                <button onClick={()=>removeItem(item.id)}>Remove Item</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div>
            <h2>Total Amount: {cartTotal}</h2>
        </div>
        <div>
            <button onClick={()=>emptyCart()}>Clear Cart</button>
            <button className='btn btn-primary'>Buy Now</button>
        </div>
       
    </div>
    </section>
  )
}

export default Cart