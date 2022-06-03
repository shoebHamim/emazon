import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from "../../fakeData/products.json";
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key}=useParams()
    // console.log(key);
    const product=fakeData.find(pd=>pd.key===key);
        console.log(product);
    
    
    return (
        <div>

            <Product showAddToCart={false} product={product}></Product>

        </div>
    );
};

export default ProductDetail;