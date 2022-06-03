import React from 'react';
import { getStoredCart,deleteFromDb } from '../../utilities/fakedb'
import { useState, useEffect } from 'react';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem';
import Cart from '../Cart/Cart';
import './Review.css'

const Review = () => {
    const [cart, setCart] = useState([]);
    const handleRemoveProduct=(productKey)=>{
        // console.log('remove clicked',{productKey});
        const newCart= cart.filter(pd=>pd.key!==productKey)
        setCart(newCart)
        deleteFromDb(productKey);
    }
    useEffect(() => {
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts)
    }, []);
    let count=0;


    return (
        <div className='review-container'>
            <div className="product-container">
            <h1>Cart Items: {cart.length}</h1>
            {
                
                cart.map(pd=><ReviewItem key={pd.key} product={pd} count={count+=1} removeProduct={handleRemoveProduct}></ReviewItem>)
            }
             </div>
            <div className="cart-container">
                <Cart cart={cart} review={true}></Cart>
            </div>
           

        </div>
    );
};

export default Review;