import React from 'react'
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
    flex-direction: column;
    align-items: center;
    background: #f0f0f0;
`

const Cart = ( {cartItems} ) => {
    return (
        <Main>
            <Title>Cart</Title>
            <Wrapper>
                {cartItems.map(item => 
                        <CartProduct key={item.id + item.size} data={item}/>
                    )}
            </Wrapper>
            <Summary>
                <h2>Summary</h2>
                <div>
                    <div>
                    <p>Order value: </p>
                    <p>Delivery: </p>
                    </div>
                <p>Total: </p>
                </div>
                <Button>Checkout</Button>
            </Summary>
        </Main>
    )
}

export default Cart
