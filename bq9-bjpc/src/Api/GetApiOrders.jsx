import Axios from 'axios'
import { useEffect, useState } from 'react'
import { ResumPedidos } from '../components/mesero/MeseroAllOrder/ResumPedidos'

export const GetApiOrders = () => {
    const [orders, setorders] = useState([])
    useEffect(() => {
            Axios.get('https://6387d97cd94a7e50408eaddc.mockapi.io/order')
            .then(response => {
                console.log(response.data)
                setorders(response.data)
            })
             .catch(function (error) {
                // handle error
                setorders(error);
              })
        }, [])
    
  return (
    <ResumPedidos ordens={orders} key={orders.id}/>
  )
}
