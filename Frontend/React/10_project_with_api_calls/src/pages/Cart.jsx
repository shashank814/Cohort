import React, { useContext } from 'react'
import CartCard from '../components/CartCard'
import { MyStore } from '../context/MyContext'

const Cart = () => {

  let {cartItems} = useContext(MyStore)
  
  return (
    <div className='h-[95%] text-6xl gap-4 grid grid-cols-3'>
       {
        cartItems.map((elem) => {
          return <CartCard key={elem.id} product={elem}/>
        })
       }
    </div>
  )
}

export default Cart
