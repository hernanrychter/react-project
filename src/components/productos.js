import React from "react";
import shampooCoco from './Images/shampooCoco.png';
import shampooHialuronico from './Images/shampooHialuronico.png';
import shampooAvenaYmiel from './Images/shampooAvenaYmiel.png';

const productosIniciales = [
  {id:1,marca:"HAN",category:"shampoos", linea:"Coco", precio:"700", stock: 10, imagen:shampooCoco },
  {id:2,marca:"HAN",category:"enjuagues", linea:"Acido Hialuronico", precio:"730", stock: 20, imagen:shampooHialuronico},
  {id:3,marca:"HAN",category:"cremas", linea:"Avena y Miel", precio:"780", stock: 5, imagen:shampooAvenaYmiel},
  {id:4,marca:"HAN",category:"finalizadores", linea:"Avena y Miel", precio:"780", stock: 5, imagen:shampooCoco},
    ]

  export default productosIniciales;