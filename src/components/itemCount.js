import React, { useState } from "react";
import "../components/itemCount.css";

const ItemCount = ({stock,initial})=>{

    
    const [count,setCount] = useState(1)

    const restar= () =>{
        if(count>0){
        setCount(count - 1)
        }
    }

    const sumar= () =>{
        if(count<stock){
        setCount(count + 1)
        }
    }


    return(
        <div className="itemCountContainer">
            <div className="contenedor-botones">
            <button className="buttons" onClick={restar}>-</button>
            <div className="contador">{count}</div>
            <button className="buttons" onClick={sumar}>+</button>
            </div>
            <button className="agregaCarrito">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
