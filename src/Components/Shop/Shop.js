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
            alert("Can't select more than 4 item")
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
                            Data ?????? component ???????????? ???????????? component ?????????????????? ????????? ????????????
                            ????????? Immutable (???????????????????????? ????????? ???????????? ??????)???
                            state ?????????  functional components ???????????? ??????????????? ????????????????????? ????????? ???????????? ???????????????
                            Props  ??????????????????????????? read-only.
                            State:
                            Data ??????????????????????????? component ??????????????? pass ????????? ?????????.
                            ????????? Mutable (???????????????????????? ????????? ???????????? ????????????)???
                            State ??????????????????????????? State components/class component  ???????????? ????????????????????? ????????? ???????????? ???????????? ???
                            State  read ????????? write ???????????? ????????? ????????????

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How useState works?</Accordion.Header>
                        <Accordion.Body>
                            useState ?????? ???????????? ????????? ?????? ?????????????????? functional components ??????  state variables ??????????????? ??????????????? ???????????? ?????? ?????????????????? initial state ????????? ???????????? ????????? ????????? current state ????????? (???????????????????????? ?????????????????? ?????????) ????????? ?????? ????????? ??????????????? ???????????? ???????????? ???????????? ???????????? ??????????????? ?????? ???????????? ??????????????????????????? ?????????????????? ????????????
                            hooks ????????????????????????, state ????????????  ???????????? ????????? ????????? ?????????????????? ??????????????? ????????? ???????????? - ???????????? ???????????? array ???????????? useState ????????????????????? ???????????? ???????????????, ???????????? object ????????????????????? ???????????? ???????????????, ???????????? number, ???????????? boolean, ???????????? string, ??????????????? ?????? ??????????????????????????? ????????????????????? call ???  useState state ??????  ???????????? ????????? ????????? ???????????? ?????????, ??????????????? ??????????????? ????????? value  ???????????? ????????????
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How React works?</Accordion.Header>
                        <Accordion.Body>
                            React ???????????? ??????????????? ???????????? ???????????? ????????? maintain ??????????????? ?????? ??????????????? ??????????????????????????? ???????????? ??????????????? ???????????? ???????????? ??????????????????
                            ??????????????? HTML ????????????????????? ???????????? ????????? ?????????????????? ????????? ??????????????? ????????????, browser ??????????????? DOM ?????? ???????????? ????????? ?????????????????? ???????????? ?????????(browser   HTML ??????  rendered ?????????  )??? react?????????????????? effectively ?????????????????????????????????????????? ??????????????? DOM ????????????????????????????????? ???????????? ????????? actually ????????? ?????????????????? ?????????????????????????????????????????? DOM-??? ????????? ???????????? ???????????????
                            react real dom ?????? ????????????????????????  virtual DOM  ???????????? ???????????? ????????? ???????????? ???????????????????????? ????????? ????????? virtual DOM ????????? ?????? ?????? ???????????????????????? ?????????????????? ?????????  virtual DOM ?????????????????????????????? DOM ??????????????? ???????????? ????????????????????? ????????????????????? ??????????????? ??????????????? ????????? ???????????? ?????????????????? ???????????? ????????? actually ????????? ?????????????????? ?????????????????????????????????????????? DOM-??? ????????? ???????????? ???????????????
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>


    );
};

export default Shop;