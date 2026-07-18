import React from 'react'
import CartCard from '../components/CartCard'

const Cart = ({cartItems}) => {
  return (
    <div className='h-[95%] text-6xl grid grid-cols-3'>
       {
        cartItems.map((elem) => {
          return <CartCard key={elem.id} product={elem}/>
        })
       }
    </div>
  )
}

export default Cart
