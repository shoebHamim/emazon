import React from 'react';
import fakeData from "../../fakeData/products.json";
import { useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart';

const Shop = () => {
    const product10 = fakeData.slice(0, 80);
    const [products, setProducts] = useState(product10);
    const [cart,setCart]=useState([]);

    const handleAddProduct=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        
    };


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product
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