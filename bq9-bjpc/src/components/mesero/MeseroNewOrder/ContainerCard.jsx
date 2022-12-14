import { useState } from "react"
import { CardProducts } from "./CardProducts"


export const ContainerCard = ({productos}) => {

      const [order, setOrder] = useState({items:[]})
      const handleOrder = (item) => {
        setOrder({...order,items:[...order.items,item]})
      }

  return (
    <>
        {productos.map(product => (
        <>
        <button onClick={handleOrder}>
        <CardProducts 
            image={product.image}
            name={product.name}
            price={product.price} 
        />
        </button>
        </>
        )
    )}

    </>
  )
}
