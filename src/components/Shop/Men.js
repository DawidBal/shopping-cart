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
    margin: 1rem 0;
    padding: 0;
    grid-column: 0 / -1;
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Men = () => {

    const data = useFetchData("https://fakestoreapi.com/products/category/men's%20clothing");

    return (
        <Main>
            <Title>Yikes</Title>
            <Wrapper>
                {data.map(prod => <Product key={prod.id} data={prod} />)}
            </Wrapper>
        </Main>
    )
}

export default Men
