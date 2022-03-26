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
        const exists = newCart.filter(cart => cart.id === product.id)
        if (exists.length > 1) {
            alert('Please select only 1 item')
            return;
        }
        if (newCart.length > 4) {
            alert('Please select total 4 item')
        } else {
            setCarts(newCart)
        }
    }

    const handleChoose1Btn = () => {
        const randomNum = Math.floor(Math.random() * 4);
        if (carts[randomNum] && carts.length > randomNum) {
            setCarts([carts[randomNum]]);
        }
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