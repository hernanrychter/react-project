import React from 'react';
import cart from '../Assets/cart.png';

const CartWidet = () =>{
    return (
    <div className="cart-container">
    <img className="cart" src={cart}/>
    <p className="counternumero">4</p>
    </div>
    )

}
export default CartWidet;
