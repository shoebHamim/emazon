import React, { useEffect } from 'react';
import fakeData from "../../fakeData/products.json";
import { useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const product10 = fakeData.slice(0, 80);
    const [products, setProducts] = useState(product10);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            console.log(product.quantity);
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts)
    }, [cart]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
        addToDb(product.key)

    };
    console.log(cart);


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product
                        key={pd.key}
                        showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Shop;