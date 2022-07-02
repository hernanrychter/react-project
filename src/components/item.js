import React from "react";
import './item.css'
import ItemCount from './itemCount'

export const Item = (producto)=>{
   
    
    
    return(
        <>
           <div id="itemContainer">
            <img id="imagenProducto" src={producto.imagen}/>
            <p>{producto.tipoProducto}</p>
            <h2>{producto.linea}</h2>
            <div id="precioId"><p>PRECIO: ${producto.precio}</p><p>Codigo: {producto.id}</p></div>
            <ItemCount stock={producto.stock} initial={0} /> 
            </div>
        </>
    )
}

