import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`

    position: relative;
    width: 200px;
    padding: 0.5rem 1rem;

    display: grid;
    place-items: center;
    text-align: center;
    
    color: #fff;
    font-size: 1.2rem;
    background-color: transparent;
    border: 2px solid ${props => props.cart ? '#0e63d8' : '#fff'};
    z-index: 0;
    cursor: pointer;
    transition: transform 200ms ease-out;

    &::before {
        content: '';
        position: absolute;
        left: -.6rem;
        top: -.5rem;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: #0e63d8;
        transition: all 200ms ease-out;
        
    }

    &:active {
        transform: scale(0.9);
    }

    &:hover::before {
        top: 0;
        left: 0;
    }
`

const Button = ({ children, onClick, cart }) => {
    return (
        <Btn cart={cart === true} onClick={onClick}>
            {children}
        </Btn>
    )
}

export default Button
