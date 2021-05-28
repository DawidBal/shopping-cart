import React from 'react';
import styled from 'styled-components';
import useFetchData from '../Utilities/useFetchData'
import Product from './Product';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    margin-top: 1.5rem;
    grid-column: 0 / -1;
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 80vw;
    margin: 1.5rem;
`

const Loading = styled.h2`
    grid-column: 1 / -1;
    justify-self: center;
`

const Collection = ({ title, url, cartItems, setCartItems, collection}) => {

    const [loading, data] = useFetchData(url);

    return (
        <Main>
            <Title>{title}</Title>
            <Wrapper>
                {loading ?
                    <Loading>Loading Data...</Loading> :
                    data.map(prod => <Product key={prod.id} data={prod} cartItems={cartItems} setCartItems={setCartItems} collection={collection} />)
                }
            </Wrapper>
        </Main>
    )
}

export default Collection
