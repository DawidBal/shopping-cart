import React from 'react'
import styled from 'styled-components'
import ButtonLink from './Utilities/ButtonLink'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background: url('./images/shopbg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction : ${props => props.column ? "column" : "row"};
    ${props => props.column ? "align-items: center": "justify-content: center"};
    gap: ${props => props.links ? "1.5rem" : "0.5rem"};
`

const Title = styled.h2`
    font-size: 3rem;
    color: #fff;
    font-weight: 800;
    margin: 0;
    padding: 0;
`
const SubTitle = styled.p`
    font-size: 1rem;
    color: #fff;
    font-weight: 400;
    margin: 0;
    padding: 0;
`

const Home = () => {
    return (
        <Main>
            <Wrapper column>
                <Title>Cuz u have to wear something</Title>
                <SubTitle>Isn't it?</SubTitle>
            </Wrapper>
            <Wrapper links>
                <ButtonLink to="/shop">Visit Shop</ButtonLink>
                <ButtonLink to="/cart">Checkout Cart</ButtonLink>
            </Wrapper>
        </Main>
    )
}

export default Home
