import { useEffect } from "react"
import { useState } from "react"
import { CardProducts } from "./CardProducts"
import { ContainerComanda } from "./ContainerComanda"


export const ContainerCard = ({productos}) => {

      const [order, setOrder] = useState({items:[]})

      const handleOrder = (item) => {
        setOrder({...order,items:[...order.items,item]})
      }


  return (
    <>
        
        {productos.map(product => (
        <>
        <button onClick={() => {handleOrder(product)}}>
          <p>{order.items.name}</p>
        <CardProducts 
            image={product.image}
            name={product.name}
            price={product.price} 
        />
        </button>
        </>
        )
    )}

    {order.items.map(item => (
      <>
      <p>{item.name}</p>
      <p>${item.price}</p>
      </>
    ))}

    </>
  )
}
