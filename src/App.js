import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {ItemListContainer} from './components/itemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer';

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
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