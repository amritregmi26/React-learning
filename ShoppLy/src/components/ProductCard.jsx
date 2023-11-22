import React from 'react'
import {useEffect, useState} from 'react';
import './styles/style.css'
import { useCart } from '../context/CartContext';

const ProductCard = ({product}) => {

  const {cartList, addToCart, removeFromCart} = useCart();
  const [inCart, setInCart] = useState(false);
  const {id, name, price, image } = product;

  useEffect(() => {
    let productInCart = cartList.find(product => product.id === id);
    if(productInCart)
    {
      setInCart(true)
    }
    else
    {
      setInCart(false)
    }
  }, [cartList, id])
  

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          inCart ? (
            <button className= "remove" onClick={() => removeFromCart(product)}>Remove</button>
          ) :
          (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
          )
        }
      </div>
    </div>
  );
}

export default ProductCard;