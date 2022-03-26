import React from 'react';
import './Cart.css'
import { MdDeleteSweep } from 'react-icons/md';
const Cart = ({ cart }) => {
    const { name, img } = cart;
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <span><MdDeleteSweep size={'1.5rem'} /></span>
        </div>
    );
};

export default Cart;