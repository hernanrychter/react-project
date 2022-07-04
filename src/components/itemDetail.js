import React from "react";
import './itemDetail.css';
import ItemCount from "./itemCount";

export const ItemDetail = ({producto})=>{
   

  const onAdd = (contador) => {
    console.log(`Estas comprando ${contador}`)
  }
    
    return(
        
        <>
            <div id="itemDetailContainer">
            <div><img id="imagenProductoDetail" src={producto.imagen}/></div>
            <div id="especificaciones">
            <p id="tipoProducto">Categoria: {producto.tipoProducto}</p>
            <h2>{producto.linea}</h2>
            <p>{producto.beneficios}</p>
            <p>{producto.descripcion}</p>
            <div id="precioId"><p>PRECIO: ${producto.precio}</p><p>Codigo: {producto.id}</p></div>
            <ItemCount stock={producto.stock} initial={0} onAdd={onAdd} /> 
            </div>
            </div>
        </>
    )
}