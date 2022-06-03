import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, img, seller, price, stock, star, features,key } = props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h4 id='product-name'><Link to={"/product/"+key}>{name}</Link></h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} item left in the stock</p>
             {props.showAddToCart && <button className='addcart-button'
                    onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add to cart</button>
                }
            </div>

        </div>
    );
};

export default Product;