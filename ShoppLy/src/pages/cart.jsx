import React from 'react'
import CartCard from '../components/CartCard'
import useTitle from '../hooks/useTitle'
import { useCart } from '../context/CartContext'

const Cart = () => {

  const {total, cartList} = useCart();

  useTitle("Cart")

  return (
    <section className="cart">
      <h1>{cartList.length} / ${total}</h1>
      {
        cartList.map(product => (
          <CartCard key={product.id} product={product} />
        ))
      }
    </section>
  )
}

export default Cart