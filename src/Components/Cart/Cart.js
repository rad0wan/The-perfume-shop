import React from 'react';
import './Cart.css'
import { MdDeleteSweep } from 'react-icons/md';
const Cart = ({ cart, handleDeleteBtn }) => {
    const { name, img } = cart;
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <span onClick={()=>handleDeleteBtn(cart)}><MdDeleteSweep size={'1.5rem'} /></span>
        </div>
    );
};

export default Cart;