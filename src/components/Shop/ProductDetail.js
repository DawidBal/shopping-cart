import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Utilities/Button';
import Select from 'react-select';
import useFetchData from '../Utilities/useFetchData';


const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
`

const Content = styled.div`
    margin: 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const LeftSide = styled.div`

`

const RightSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    align-items: center;
    font-size: 1.2rem;
    & > button {
        margin-top: 0.5rem;
    }
`

const Image = styled.img`
    object-fit: cover;
    min-width: 200px;
    width: 100%;
    max-width: 600px;
`

const Price = styled.p`
    font-size: 2rem;
`

const Title = styled.h2`
    font-size: 2rem;
    max-width: 25ch;
    text-align: center;
`


const options = [
    { value: 'S', label: "S" },
    { value: 'M', label: "M" },
    { value: 'L', label: "L" },
    { value: 'XL', label: "XL" },
]

const ProductDetail = ({ cartItems, setCartItems }) => {

    const { state: fetchId } = useLocation();

    const [size, setSize] = useState(null);
    const [badSize, setBadSize] = useState(false);

    const [loading, data] = useFetchData(`https://fakestoreapi.com/products/${fetchId}`);

    const history = useHistory();

    const handleSize = ({ value: size }) => {
        setBadSize(false);
        setSize(size);
    };

    const getItemCartIndex = (productData) => cartItems.findIndex(item => item.id === productData.id && item.size === productData.size);

    const isItemInCart = (productData) => getItemCartIndex(productData) !== -1

    const increaseItemQuantity = (productData) => {
        const itemIndex = getItemCartIndex(productData);
        const itemData = { ...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity + 1 };
        const newCartData = [...cartItems];
        newCartData.splice(itemIndex, 1, itemData);
        setCartItems(newCartData);
    }

    const addToCart = () => {
        if (size === null) {
            setBadSize(true);
            return
        }

        const productData = {
            id: data.id,
            title: data.title,
            price: data.price,
            image: data.image,
            size,
            quantity: 1,
        }

        if (isItemInCart(productData)) {
            increaseItemQuantity(productData);
        } else {
            setCartItems(cartItems.concat(productData));
        }
    }

    return (
        <Main>
            {loading ?
                <h2>Loading Data...</h2> :
                <Content>
                    <LeftSide>
                        <Image src={data.image} alt="" />
                    </LeftSide>
                    <RightSide>
                        <Title>{data.title}</Title>
                        <Price>{data.price}$</Price>
                        <label htmlFor={"size-" + data.id}>Size</label>
                        <Select
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    width: 200,
                                    borderColor: badSize ? 'hsl(0, 100%, 50%)' : 'hsl(0, 0%, 80%)',
                                }),
                            }}
                            id={"size-" + data.id} options={options} placeholder={"Choose Size"} onChange={handleSize} />
                        <Button cart onClick={addToCart}>Add to Cart</Button>
                        <Button cart onClick={() => history.goBack()}>Go Back</Button>
                    </RightSide>
                </Content>
            }
        </Main>
    )
}

export default ProductDetail
