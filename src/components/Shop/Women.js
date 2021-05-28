import React from 'react';
import Collection from './Collection';

const Women = ({ cartItems, setCartItems }) => {

    return (
        <Collection cartItems={cartItems} setCartItems={setCartItems} title={"Women's Collection"} url={"https://fakestoreapi.com/products/category/women's%20clothing"} collection={'women'} />
    )
}

export default Women
