import React from 'react';
import logo from '../Assets/logo.png';
import '../components/Navbar.css'
import CartWidget from './cartWidget';

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
         <CartWidget/>
         </div>
        </>
    )
}

export default Navbar;
