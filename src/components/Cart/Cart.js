import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
   
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
    let shipping = 12.99;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 14) {
        shipping = 4.99;
    }
    else if (cart.length === 0) {
        shipping = 0;
    }
    let total_price = total + shipping;



    return (
        <div className='cart-container'>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Total Price: ${total_price}</p>
            <br />
            { !props.review && 
                <Link to={'/review'}>
                <button className='addcart-button'> Review Order</button>
            </Link>
            }
            
            

        </div>
    );
};

export default Cart;