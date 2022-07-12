import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {ItemListContainer} from './components/itemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Cart } from './components/cart';

const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar/>
     <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
       
    </BrowserRouter>
    
  );
}

export default App;

/*
//Funcion tradicional
function Mifunction(){
  return
}

//Arrow Function/Funcion Flecha
const Mifunction = () =>{
  return
}
*/