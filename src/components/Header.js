import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Heading = styled.header`
    margin-bottom: 1rem;
    padding: 1rem;
    background: #fff;
    box-shadow: 0px 5px 10px 0px #e8e8e8;
`

const LinkList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
`

const Wrapper = styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;
`

const Logo = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
`
const CartCounter = styled.span`
    position: absolute;
    left: 20px;
    top: 20px;
    height: 18px;
    min-width: 18px;
    line-height: 18px;
    font-size: 0.6em;
    font-weight: bold;
    border-radius: 500px;
    color: white;
    text-align: center;
    background: #0c7fd0;
    
`

const Header = ({ cartCounter }) => {
    return (
        <Heading>
            <LinkList>
                <Wrapper>
                    <li>
                        <Logo>
                            <Link to="/">Wearsome</Link>
                        </Logo>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                </Wrapper>
                <li style={{position: 'relative'}}>
                    <Link to="/cart">
                        <CartCounter>{cartCounter}</CartCounter>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                        </svg>
                    </Link>
                </li>
            </LinkList>
        </Heading>
    )
}

export default Header
