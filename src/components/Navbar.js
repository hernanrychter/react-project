import React from 'react';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import '../components/Navbar.css'

const Navbar = () =>{
    return(
        <>
        <div className="container">
        <img className="logo-solma" src={logo}/>
        <h1>Distribuidor Exclusivo de Productos Capilares HAN</h1>
         <nav>
             <a href="">Productos</a>
             <a href="">Historia</a>
             <a href="">Contacto</a>
             
         </nav>
         <img className="cart" src={cart}/>
         </div>
        </>
    )
}

export default Navbar;
