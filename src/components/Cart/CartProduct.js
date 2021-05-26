import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Select from 'react-select';

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

const CartProduct = ({ data }) => {
    
    
    const [quantity, setQuantity] = useState(data.quantity);
    const calculateTotalPrice = () => (data.price * quantity).toFixed(2) + "$";
    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());


    const handleChange = ({value}) => {
        setQuantity(value);
    }

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [quantity])

    return (
        <Product>
            <Image src={data.image} alt="" />
            <div>
            {data.title}
            <p>Size: {data.size}</p>
            </div>
            <div>
                <label htmlFor={"size-" + data.id}>Quantity</label>
                <Select
                    styles={{
                        control: (provided) => ({
                            ...provided,
                            width: 100,
                        }),
                    }}
                    id={"size-" + data.id} defaultValue={options[quantity - 1]} options={options} onChange={handleChange} />
                <p>Total: {totalPrice}</p>
            </div>
        </Product>
    )
}

export default CartProduct
