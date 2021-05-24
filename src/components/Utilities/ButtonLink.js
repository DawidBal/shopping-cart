import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled(Link)`

    position: relative;
    width: 200px;
    padding: 0.5rem 1rem;

    display: grid;
    place-items: center;
    text-align: center;
    
    color: #fff;
    font-size: 1.2rem;
    background-color: transparent;
    border: 2px solid #fff;
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

const ButtonLink = ({to, children}) => {
    return (
        <Links to={to}>
            {children}
        </Links>
    )
}

export default ButtonLink
