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
    <div className="container--fluid">
        <div className='row'>
        <div className="col-6">
        <div className="row justify-content-md-center">
       
        {productos.map(product => (
        <>
        <button className="col-8" onClick={() => {handleOrder(product)}}>
          <p>{order.items.name}</p>
        <CardProducts
            image={product.image}
            name={product.name}
            price={product.price} 
        />
        </button>
        <p/>
        </>
        )
    )}
   
    </div>
    </div>


          <div className="col-6">
          <div className="card">
          <h5 className="card-header" id="cardHeader">#</h5>
    {order.items.map(item => (
      <>
      <ContainerComanda 
      name={item.name}
      price={item.price}
      />
      </>
    ))}
    <div className="card-footer" id="cardHeader">
                <div id="text-left">
                <p> TOTAL </p>
                <span>SUMA</span>
                </div>
                <div className="text-end">
                  <button href="#" className="btn" id="finishedOrder">Entregar</button>
                </div>
              </div>
    </div>
  </div>
  </div>
  </div>
    </>
  )
}
