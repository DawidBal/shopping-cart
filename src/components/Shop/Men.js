import React from 'react';
import Collection from './Collection'

const Men = ({ cartItems, setCartItems }) => {

    return (
      <Collection cartItems={cartItems} setCartItems={setCartItems} title={"Men's Collection"} url={"https://fakestoreapi.com/products/category/men's%20clothing"}/>
    )
}

export default Men
