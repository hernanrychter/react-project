import React, { useEffect, useState } from "react";
import {ItemDetail} from './itemDetail';
import shampooCoco from './Images/shampooCoco.png';
import SyncLoader from "react-spinners/SyncLoader";



const producto = {id:1,marca:"HAN",tipoProducto:"Shampoo", linea:"Aceite de Coco", beneficios:"Reparador Express Hidronutritivo", descripcion:"El aceite de coco es bien reconocido por sus propiedades naturales beneficiosas para la salud de la dermis, el organismo y el cabello.", precio:"700", stock: 10, imagen:shampooCoco};
 

const promesa = new Promise ((resolve,reject)=>{ 
    setTimeout(()=>{
    resolve(producto)
    },0)
 });


export const ItemDetailContainer = ()=>{
  
  const [producto, setProducto] = useState({});

  useEffect(()=>{
    promesa.then((producto)=>{
      setProducto(producto); 
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
      <ItemDetail producto = {producto}/>
    )
  
}
