import React from 'react'
import styled from 'styled-components'
import ButtonLink from './Utilities/ButtonLink'
import BackgroundImage from '../images/shopbg.jpg';

const Main = styled.main`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    background: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction : ${props => props.column ? "column" : "row"};
    ${props => props.column ? "align-items: center": "justify-content: center"};
    gap: ${props => props.links ? "1.5rem" : "0.5rem"};
    flex-wrap: wrap;
    text-align: center;
     ${props => props.column ? "line-height: 1" : null};
`

const Title = styled.h2`
    font-size: 3rem;
    color: #fff;
    font-weight: 800;
`
const SubTitle = styled.p`
    font-size: 1rem;
    color: #fff;
    font-weight: 400;
`

const ColorText = styled.span`
    color: var(--main-color);
`

const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    flex-wrap: wrap;
    text-align: center;
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%);
    padding: 2rem 0;
`

const Home = () => {
    return (
        <Main>
            <Overlay>
                <Wrapper column>
                    <Title>Because you have to <ColorText>wear some</ColorText>thing</Title>
                    <SubTitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, perspiciatis?
                    </SubTitle>
                </Wrapper>
                <Wrapper links>
                    <ButtonLink to="/shop">Visit Shop</ButtonLink>
                    <ButtonLink to="/cart">Checkout Cart</ButtonLink>
                </Wrapper>
            </Overlay>
        </Main>
    )
}

export default Home
