import React from "react";
import { Item } from "./item";
import './ItemList.css'


export const ItemList = ({productos})=>{

    return(
        <>
        <div id="ItemsContainer">
        {productos.map((producto)=><Item id={producto.id} tipoProducto={producto.tipoProducto} linea={producto.linea} precio={producto.precio} stock={producto.stock} imagen={producto.imagen}/>)} 
        </div>
        </>
    )
}

