import React from 'react'
import CartCard from '../components/CartCard'

const Cart = () => {
  const products = [
    {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/images/1001.png",}, 
    {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/images/1002.png",}, 
  ]

  return (
    <section className="cart">
      <h1>Cart Items: 2</h1>
      {
        products.map(product => (
          <CartCard key={product.id} product={product} />
        ))
      }
    </section>
  )
}

export default Cart