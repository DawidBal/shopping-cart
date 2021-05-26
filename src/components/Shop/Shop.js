import React from 'react'
import styled from 'styled-components'
import ButtonLink from '../Utilities/ButtonLink';
import ManImage from '../../images/men.jpg'
import WomanImage from '../../images/women.jpg'

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
`

const Title = styled.h2`
    margin: 1rem 0;
    padding: 0;
    grid-column: 1 / -1;
    text-align: center;
    font-size: clamp(1.5rem, 1.5rem + 1vw, 3rem);
    font-weight: 800;
    
`

const ImageSection = styled.div`
    position: relative;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    background: ${props => props.men ? `url(${ManImage})` : `url(${WomanImage})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    &:hover .overlay {
        transform: translateY(0);
    }
    &:hover .collection-title {
        color: #fff;
    }
`

const Overlay = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease;
    transform: translateY(100%);
`

const CollectionTitle = styled(Title)`
    transition: color 0.3s ease;
    color: #0e63d8;
    z-index: 0;
`

const Shop = () => {
    return (
        <Main>
            <Title>Choose Collection</Title>
            <ImageSection men>
                <Overlay className="overlay" />
                <CollectionTitle className="collection-title"> Men Collection </CollectionTitle>
                <ButtonLink to={'/shop/men'}>Men</ButtonLink>
            </ImageSection>
        
            <ImageSection>
                <Overlay className="overlay" />
                <CollectionTitle className="collection-title"> Women Collection </CollectionTitle>
                <ButtonLink to={'/shop/women'}>Women</ButtonLink>
            </ImageSection>
        </Main>
    )
}

export default Shop
