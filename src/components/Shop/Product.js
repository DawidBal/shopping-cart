import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../Utilities/Button';
import Select from 'react-select';
import { Link, useRouteMatch } from 'react-router-dom';

const Item = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 5px #0000002a;
`

const Image = styled.img`
    object-fit: cover;
    max-width: 250px;
    max-height: 270px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`

const Title = styled.h2`
    width: 100%;
    max-width: 25ch;
    text-align: center;
`

const Price = styled.p`
    font-size: 1.5rem;
`

const options = [
    { value: 'S', label: "S"},
    { value: 'M', label: "M"},
    { value: 'L', label: "L"},
    { value: 'XL', label: "XL"},
]

const Product = ({ data, cartItems, setCartItems, collection }) => {

    const match = useRouteMatch();

    const linkTitle = data.title.toLowerCase().split(" ").join("-");

    const [size, setSize] = useState(null);
    const [badSize, setBadSize] = useState(false);

    const handleSize = ( {value: size} ) => {
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
        if(size === null) {
            setBadSize(true);
            return
        }

        const productData = {
            id: data.id,
            title: data.title,
            price: data.price,
            image: data.image,
            collection,
            size,
            quantity: 1,
        }
        
        if(isItemInCart(productData)) {
            increaseItemQuantity(productData);
        } else {
            setCartItems(cartItems.concat(productData));
        }
    }

    return (
        <Item>
            <Link to={{
                pathname: `${match.url}/${linkTitle}`,
                state: data.id
            }}>
                <Image src={data.image} alt="" />
            </Link>
            <Link to={{
                pathname: `${match.url}/${linkTitle}`,
                state: data.id
            }}>
                <Title>{data.title}</Title>
            </Link>
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
            id={"size-" + data.id} options={options} placeholder={"Choose Size"} onChange={handleSize}/>
            <Button cart onClick={addToCart}>Add to Cart</Button>
        </Item>
    )
}

export default Product
