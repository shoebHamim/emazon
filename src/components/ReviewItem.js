import React from 'react';

const ReviewItem = (props) => {
    const product=props.product;
    return (
        <div>
            <img src={product.img} alt="" />
            <h3>{props.count}. {product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Quantity :{product.quantity}</p>
            <button onClick={()=>props.removeProduct(product.key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;