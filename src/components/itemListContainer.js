import React, { useEffect, useState } from "react";
import {ItemList} from './itemList';
import shampooCoco from './Images/shampooCoco.png';
import shampooHialuronico from './Images/shampooHialuronico.png';
import shampooAvenaYmiel from './Images/shampooAvenaYmiel.png';
import SyncLoader from "react-spinners/SyncLoader";
import './itemListContainer.css';


const productosIniciales = [
  {id:1,marca:"HAN",tipoProducto:"Shampoo", linea:"Coco", precio:"700", stock: 10, imagen:shampooCoco },
  {id:2,marca:"HAN",tipoProducto:"Shampoo", linea:"Acido Hialuronico", precio:"730", stock: 20, imagen:shampooHialuronico},
  {id:3,marca:"HAN",tipoProducto:"Shampoo", linea:"Avena y Miel", precio:"780", stock: 5, imagen:shampooAvenaYmiel}
    ]
  
const promesa = new Promise ((resolve,reject)=>{ 
    setTimeout(()=>{
    resolve(productosIniciales)
    },0)
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


  const [loading, setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])


    return (
       loading?
       <div className="spinner">
       <SyncLoader color="#d237b4" margin={10} size={20} speedMultiplier={1}/>
       </div>
    :
      <ItemList productos = {productos}/>
    )
  
}
