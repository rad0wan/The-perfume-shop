import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const handleDeleteBtn = (product) => {
        const exists = carts.filter(cart => cart.id !== product.id)
        setCarts(exists)
    }
    return (
        <div>
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
                        handleDeleteBtn={handleDeleteBtn}
                    ></Order>
                </div>
            </div>
            <div className='accordion-container'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Props vs state?</Accordion.Header>
                        <Accordion.Body>
                            Props:
                            Data এক component থেকে অন্য component প্রেরণ করা হয়।
                            এটি Immutable (পরিবর্তন করা যাবে না)।
                            state এবং  functional components সাথে প্রপস ব্যবহার করা যেতে পারে।
                            Props  শুধুমাত্র read-only.
                            State:
                            Data শুধুমাত্র component মধ্যে pass করা হয়.
                            এটি Mutable (পরিবর্তন করা যেতে পারে)।
                            State শুধুমাত্র State components/class component  সাথে ব্যবহার করা যেতে পারে ।
                            State  read এবং write উভয় করা যায়।

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How useState works?</Accordion.Header>
                        <Accordion.Body>
                            useState হল একটি হুক যা আপনাকে functional components কে  state variables রাখতে দেয়। আপনি এই ফাংশনে initial state পাস করেন এবং এটি current state মান (প্রাথমিক অবস্থা নয়) এবং এই মান আপডেট করার জন্য অন্য একটি ফাংশন সহ একটি ভেরিয়েবল প্রদান করে।
                            hooks সাহায্যে, state টিকে  আপনি চান এমন যেকোনো ধরনের হতে পারে - আপনি একটি array সাথে useState ব্যবহার করতে পারেন, একটি object ব্যবহার করতে পারেন, একটি number, একটি boolean, একটি string, আপনার যা প্রয়োজন। প্রতিটি call এ  useState state এর  একটি একক অংশ তৈরি করে, যেকোন ধরণের একক value  ধারণ করে।
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How React works?</Accordion.Header>
                        <Accordion.Body>
                            React মূলত আপনার জন্য একটি গাছ maintain রাখে। এই গাছটি নোডগুলিতে দক্ষ ভিন্ন গণনা করতে সক্ষম।
                            আপনার HTML কোডটিকে একটি গাছ হিসাবে মনে করুন। আসলে, browser আপনার DOM এর সাথে ঠিক কীভাবে আচরণ করে(browser   HTML কে  rendered করে  )। reactআপনাকে effectively জাভাস্ক্রিপ্টে আপনার DOM পুনঃনির্মাণ করতে এবং actually ঘটে যাওয়া পরিবর্তনগুলিকে DOM-এ পুশ করতে দেয়।
                            react real dom এর পাশাপাশি  virtual DOM  তৈরি করে। যখন কোনো পরিবর্তন ঘটে তখন virtual DOM দেখ কি কি পরিবর্তন হয়েছে। তখন  virtual DOM ব্রাউজারের DOM আপডেট করার সবচেয়ে কার্যকর উপায় খুঁজে বের করার চেষ্টা করবে এবং actually ঘটে যাওয়া পরিবর্তনগুলিকে DOM-এ পুশ করতে দেয়।
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>


    );
};

export default Shop;