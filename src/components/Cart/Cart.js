import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Utilities/Button'
import CartProduct from './CartProduct'

const Title = styled.h2`
    text-align: center;
    font-weight: 800;
`

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
    }
`

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 1rem;
    margin: 1rem 2rem;
`

const Summary = styled.aside`
    padding: 1rem 3rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    background: #f0f0f0;
`

const MainTitle = styled(Title)`
    margin-top: 1rem;
    grid-column: 1 / -1;
    font-size: clamp(1.5rem, 1.5rem + 1vw, 3rem);

`

const SummaryTitle = styled(Title)`
    font-size: clamp(1.5rem, 1.5rem + 1vw, 2.5rem);
`

const OrderValueWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const OrderValues = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    font-size: 1.2rem;
`

const Total = styled(OrderValues)`
    padding-top: 0.5rem;
    border-top: 1px solid #ccc;
    `
const TotalAmount = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
`

const Cart = ({ cartItems, setCartItems } ) => {

    const [orderValue, setOrderValue] = useState(0.00);
    const [deliveryValue, setDeliveryValue] = useState(0.00);
    const [isDeliveryFree, setIsDeliveryFree] = useState(false);
    const freeDeliveryValue = 199.99;

    const checkDelivery = () => orderValue >= freeDeliveryValue ? setIsDeliveryFree(true) : setIsDeliveryFree(false);

    const calculateOrderValue = () => {
        setOrderValue(cartItems.length > 0 ? cartItems.reduce((sum, item) => {
            return +(sum += item.price * item.quantity).toFixed(2);
        }, 0) : 0)
    }

    const calculateTotalValue = () => isDeliveryFree ? `${orderValue}$` : `${Math.round((orderValue + deliveryValue) * 100) / 100}$`;

    const calculateDelivery = () => cartItems.length > 0 && !isDeliveryFree ? setDeliveryValue(9.99) : setDeliveryValue(0.00);
    
    useEffect(() => {
        calculateOrderValue();
    }, [cartItems])

    useEffect(() => {
        checkDelivery();
    }, [orderValue])

    useEffect(() => {
        calculateDelivery()
    }, [isDeliveryFree, cartItems])

    return (
        <Main>
            <MainTitle>Cart</MainTitle>
            <Wrapper>
                {cartItems.map((item, index) => 
                    <CartProduct key={item.id + item.size} data={item} cartItems={cartItems} itemIndex={index} setCartItems={setCartItems}/>
                    )}
            </Wrapper>
            <Summary>
                <SummaryTitle>Summary</SummaryTitle>
                <OrderValueWrapper>
                    <OrderValues>
                        <span>Order value: </span>
                        <span>{`${orderValue}$`}</span>
                    </OrderValues>
                    <OrderValues>
                        <span>Delivery: </span>
                        <span>{`${deliveryValue}$`}</span>
                    </OrderValues>
                    
                    <Total>
                        <span>Total: </span>
                        <TotalAmount>{calculateTotalValue()}</TotalAmount>
                    </Total>
                </OrderValueWrapper>
                <Button cart summary>Checkout</Button>
            </Summary>
        </Main>
    )
}

export default Cart
