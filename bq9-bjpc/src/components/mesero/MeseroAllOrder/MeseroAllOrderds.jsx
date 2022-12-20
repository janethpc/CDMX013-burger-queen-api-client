import {  Link } from 'react-router-dom'
import { GetApiOrders } from '../../../Api/GetApiOrders'
import '../MeseroNewOrder/Mesero.css';

export const MeseroAllOrder = () => {

  return (
    <>
    <div className='container text-center'>
      <div className='row'>
       
       <GetApiOrders/>
       <Link to={'/NewOrder'}><button>Nueva Orden</button></Link>
     
       </div>
       </div>
    </>
  )
}
