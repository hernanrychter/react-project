import React, { useEffect, useState } from "react";
import {ItemList} from './itemList';
import SyncLoader from "react-spinners/SyncLoader";
import './itemListContainer.css';
import { useParams } from "react-router";
import productosIniciales from "./productos";

  
const promesa = new Promise ((resolve,reject)=>{ 
    setTimeout(()=>{
    resolve(productosIniciales)
    },0)
 });


export const ItemListContainer = ()=>{

  const {categoryName}=useParams();
  // destructuring

  const [productos, setProductos] = useState([]);
  useEffect(()=>{
    promesa.then((productos)=>{
      const productosFiltrados = productos.filter(producto=>producto.category==categoryName);
      !categoryName
      ? setProductos(productos)
      : setProductos(productosFiltrados); 
      }
    )
    .catch(()=>{
      console.log("error")
    })
    } , [categoryName]) //Array de dependencia vacio, se ejecuta solo cuando se monta el componente  


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
