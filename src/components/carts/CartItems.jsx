import React from 'react'
import CartItem from './CartItem';

const CartItems = (props) => {
  return (
    <tbody>
      {props.cartStore.state.items.map((item, i) => (
        <CartItem
          idx={i}
          id={item.id}
          title={item.name}
          qty={item.qty}
          price={item.price}
          cartStore={props.cartStore}  
        />
      ))}
    </tbody>
  )
}

export default CartItems