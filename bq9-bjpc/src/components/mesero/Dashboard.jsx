import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { NavBar } from '../../NavBar/NavBar'
import { Modal } from './modal'



export const Dashboard = () => {


    //outlet trabaja la composiciòn
  return (
    <>
         <NavBar/>
         <div className='container-fluid'>
          <div className='text-center'>
         <h1>welcome</h1>
         <Link to={'/NewOrder'}><button>Nueva Orden</button></Link>
         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        modal </button>
        <modal/>
         <Link to={'/AllOrder'}><button>Historial De Pedidos</button></Link>
         </div>
         <div className='row'>
        <Outlet/>
        </div>
        </div>
    </>
  )
}
