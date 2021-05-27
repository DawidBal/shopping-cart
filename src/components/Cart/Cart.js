import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Utilities/Button'
import CartProduct from './CartProduct'

const Title = styled.h2`
    margin-top: 1rem;
    padding: 0;
    grid-column: 1 / -1;
    text-align: center;
    font-size: clamp(1.5rem, 1.5rem + 1vw, 3rem);
    font-weight: 800;
`

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
`

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 1rem;
    margin: 1rem 2rem;
`

const Summary = styled.aside`
    padding: 1rem 2rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    background: #f0f0f0;
`

const Cart = ({ cartItems, setCartItems } ) => {

    const [orderValue, setOrderValue] = useState(0.00);
    const [isDeliveryFree, setIsDeliveryFree] = useState(false);
    const freeDeliveryValue = 199.99;

    const checkDelivery = () => orderValue >= freeDeliveryValue ? setIsDeliveryFree(true) : setIsDeliveryFree(false);

    const calculateOrderValue = () => {
        setOrderValue(cartItems.length > 0 ? cartItems.reduce((sum, item) => {
            return +(sum += item.price * item.quantity).toFixed(2);
        }, 0) : 0.00)
    }

    const calculateTotalValue = () => isDeliveryFree ? `${orderValue}$` : `${orderValue + 9.99}$`;
    
    useEffect(() => {
        calculateOrderValue();
    }, [cartItems])

    useEffect(() => {
        checkDelivery();
    }, [orderValue])

    return (
        <Main>
            <Title>Cart</Title>
            <Wrapper>
                {cartItems.map((item, index) => 
                    <CartProduct key={item.id + item.size} data={item} cartItems={cartItems} itemIndex={index} setCartItems={setCartItems}/>
                    )}
            </Wrapper>
            <Summary>
                <h2>Summary</h2>
                <div>
                    <div>
                        <p>{`Order value: ${orderValue}$`}</p>
                        <p>Delivery: </p>
                    </div>
                    <p>Total: { calculateTotalValue() }</p>
                </div>
                <Button cart>Checkout</Button>
            </Summary>
        </Main>
    )
}

export default Cart
