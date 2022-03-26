import React from 'react';
import './Product.css'
import { FaOpencart } from 'react-icons/fa';
const Product = ({ product, handleAddCartBtn }) => {
    const { img, name, price } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddCartBtn(product)} className='btn-add'>
                <span className='add-cart'>Add to Cart</span>
                <FaOpencart size={'20px'}  /></button>
        </div>
    );
};

export default Product;