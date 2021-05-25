import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../Utilities/Button';
import Select from 'react-select';

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

const Product = ({ data, cartItems, setCartItems }) => {

    const [size, setSize] = useState(null);
    const [badSize, setBadSize] = useState(false);

    const handleSize = ({value: size}) => {
        setBadSize(false);
        setSize(size)
    };


    // TODO Refactor function
    const addToCart = () => {
        if(size === null) {
            setBadSize(true);;
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

        setCartItems(cartItems.concat(productData));

    }

    return (
        <Item>
            <Image src={data.image} alt="" />
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
            id={"size-" + data.id} options={options} placeholder={"Choose Size"} onChange={handleSize}/>
            <Button cart onClick={addToCart}>Add to Cart</Button>
        </Item>
    )
}

export default Product
