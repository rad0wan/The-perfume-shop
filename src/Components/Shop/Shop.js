import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddCartBtn = (product) => {
        console.log(product);
        const newCart = [...carts, product]
        setCarts(newCart)
    }

    const handleChoose1Btn = () => {

    }

    const handleChooseAgainBtn = () => {
        setCarts([])
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddCartBtn={handleAddCartBtn}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <Order
                    carts={carts}
                    handleChoose1Btn={handleChoose1Btn}
                    handleChooseAgainBtn={handleChooseAgainBtn}
                ></Order>
            </div>
        </div>
    );
};

export default Shop;