import React, { useEffect, useState } from "react";
import {ItemDetail} from './itemDetail';
import productosIniciales from "./productos";
import SyncLoader from "react-spinners/SyncLoader";
import { useParams } from "react-router";

const promesa = new Promise ((resolve,reject)=>{ 
    setTimeout(()=>{
    resolve(productosIniciales)
    },0)
 });


export const ItemDetailContainer = ()=>{

  const {itemId}=useParams();
  console.log(itemId)
  
  const [producto, setProducto] = useState({});
  useEffect(()=>{
    promesa.then((product)=>{
      const idFiltrado = product.filter(prod=>prod.id==itemId);
        setProducto(idFiltrado); 
    })
    .catch(()=>{
      console.log("error")
    })
    } , [itemId]) //Array de dependencia vacio, se ejecuta solo cuando se monta el componente  


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
      <ItemDetail producto = {producto}/>
    )
  
}
