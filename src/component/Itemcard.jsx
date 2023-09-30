import React from 'react'
import  {useCart} from "react-use-cart";

const Itemcard = (props) => {
    const  {addItem} = useCart()
    console.log({addItem})
  return (
<div className=' w-100 d-flex justify-content-evenly'>
        <div class="card w-50 " height="300"  >
             <div>
                 <img className='w-100' height={300} src={props.img}  alt="" />
             </div>
           <div class="card-body">
               <h5 class="card-title">{props.title}</h5>
               <p class="card-text">${props.price}</p>
               <p class="card-text">{props.desc}</p>
              <button onClick={()=>addItem(props.item)} className='btn btn-success '>Add to Card</button>
          </div>
       </div>
       </div>
  )
}

export default Itemcard