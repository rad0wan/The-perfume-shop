import React from 'react';
import './Product.css'
const Product = ({ product, handleAddCartBtn }) => {
    const { img, name, price } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddCartBtn(product)} className='btn-add'>Add to Cart</button>
        </div>
    );
};

export default Product;