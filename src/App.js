import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/itemListContainer';

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greetings="Aqui irá el catalogo de Productos"/>
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