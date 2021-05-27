import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Select from 'react-select';
import Button from '../Utilities/Button';

const Product = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 2px 5px #0000002a;
`

const Image = styled.img`
    grid-row: 1 / -1;
    object-fit: cover;
    max-width: 100px;
    max-height: 150px;
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    gap: 0.3rem;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
`

const IconContainer = styled.div`
    align-self: flex-start;
`

const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
    { value: 16, label: 16 },
    { value: 17, label: 17 },
    { value: 18, label: 18 },
    { value: 19, label: 19 },
    { value: 20, label: 20 },
]

const CartProduct = ({ data, cartItems, setCartItems, itemIndex }) => {
    
    
    const [quantity, setQuantity] = useState(data.quantity);
    const calculateTotalPrice = () => (data.price * quantity).toFixed(2) + "$";
    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

    const handleChange = ({value}) => {
        setQuantity(value);
    }

    const updateItemQuantity = () => {
        const itemData = { ...cartItems[itemIndex], quantity };
        const newCartData = [...cartItems];
        newCartData.splice(itemIndex, 1, itemData);
        setCartItems(newCartData);
    }

    const removeItem = () => {
        const newCartData = [...cartItems];
        newCartData.splice(itemIndex, 1);
        setCartItems(newCartData);
    }

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
        updateItemQuantity();
    }, [quantity])

    return (
        <Product>
            <Image src={data.image} alt="" />
            <div>
            {data.title}
            <p>Size: {data.size}</p>
            </div>
            <Wrapper>
                <FlexColumn>
                    <label htmlFor={"size-" + data.id}>Quantity</label>
                    <Select
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                width: 100,
                            }),
                            container: (provided) => ({
                                ...provided,
                                alignSelf: 'flex-start',
                            })
                        }}
                        id={"size-" + data.id} defaultValue={options[quantity - 1]} options={options} onChange={handleChange} />
                    <p>Total: {totalPrice}</p>
                </FlexColumn>
                <IconContainer>
                    <svg onClick={removeItem} className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                    </svg>
                </IconContainer>
            </Wrapper>
        </Product>
    )
}

export default CartProduct
