import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from '../Assets/logo.png';
import '../components/Navbar.css'
import CartWidget from './cartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{

    const categories = [
        {name:"Shampoos", id:0, route:"/category/shampoos"},
        {name:"Cremas de enjuague", id:1, route:"/category/enjuagues"},
        {name:"Baños de crema", id:2, route:"/category/cremas"},
        {name:"Finalizadores", id:3, route:"/category/finalizadores"},
    ];

    return(
        
        <header className="container">
        <NavLink to="/"> <img className="logo-solma" src={logo}/></NavLink>
        <h1>Distribuidor Exclusivo Productos <span>HAN®</span></h1>
         <nav>
            {categories.map((category)=><NavLink to={category.route} className="categorias">{category.name}</NavLink>)}
         </nav>
         <NavLink to="/cart"><CartWidget/></NavLink>
         </header>
    )
}

export default Navbar;
