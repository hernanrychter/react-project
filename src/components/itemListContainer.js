import React, { useEffect, useState } from "react";
import {ItemList} from './itemList';
import shampooCoco from './Images/shampooCoco.png';
import shampooHialuronico from './Images/shampooHialuronico.png';
import shampooAvenaYmiel from './Images/shampooAvenaYmiel.png';


const productosIniciales = [
  {id:1,marca:"HAN",tipoProducto:"Shampoo", linea:"Coco", precio:"700", stock: 10, imagen:shampooCoco },
  {id:2,marca:"HAN",tipoProducto:"Shampoo", linea:"Acido Hialuronico", precio:"730", stock: 20, imagen:shampooHialuronico},
  {id:3,marca:"HAN",tipoProducto:"Shampoo", linea:"Avena y Miel", precio:"780", stock: 5, imagen:shampooAvenaYmiel}
    ]
  
const promesa = new Promise ((resolve,reject)=>{ 
    setTimeout(()=>{
    resolve(productosIniciales)
    },2000)
 });


export const ItemListContainer = ()=>{
  
  const [productos, setProductos] = useState([]);

useEffect(()=>{
  promesa.then((productos)=>{
    setProductos(productos); 
  })
  .catch(()=>{
    console.log("error")
  })
  } , []) //Array de dependencia vacio, se ejecuta solo cuando se monta el componente

    return (
      <>
      <ItemList productos = {productos}/>
      </>
    )
  
}
