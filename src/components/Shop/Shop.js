import React from 'react';
import fakeData from "../../fakeData/products.json";
import { useState } from 'react';

const Shop = () => {
    const product10=fakeData.slice(0,10)
    const [products, setProducts] = useState(product10)
    
    
    return (
        <div>
            <h1>This is shop</h1>
            <ol>
                {
                    products.map(product=><li>{product.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Shop;