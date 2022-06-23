import React from 'react';
import ItemCount from './itemCount';

const ItemListContainer = (props)=>{
    return (
      <>
      <div>{props.greetings}</div>
      <ItemCount stock={5} initial={1}/>
      </>
    )
}
export default ItemListContainer