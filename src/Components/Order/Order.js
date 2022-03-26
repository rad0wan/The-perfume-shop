import React from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
const Order = ({ carts, handleChoose1Btn, handleChooseAgainBtn }) => {
    console.log(carts);
    return (
        <div className='order'>
            <h3>Selected Products</h3>
            {
                carts.map(cart => <Cart
                    key={cart.id}
                    cart={cart}
                ></Cart>)
            }
            <div className='btn-container'>
                <button onClick={handleChoose1Btn} className='btn-choose'>Choose 1 For Me</button>
                <button onClick={handleChooseAgainBtn} className='btn-choose'>Choose Again</button>
            </div>
        </div>
    );
};

export default Order;