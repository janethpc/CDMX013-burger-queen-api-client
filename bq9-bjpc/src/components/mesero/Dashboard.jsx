import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { NavBar } from '../../NavBar/NavBar'



export const Dashboard = () => {
    //outlet trabaja la composiciòn
  return (
    <>
         <NavBar/>
         <h1>welcome</h1>
         <Link to={'/NewOrder'}><button>Nueva Orden</button></Link>
         <Link to={'/AllOrder'}><button>Historial De Pedidos</button></Link>
        
        <Outlet/>
        
    </>
  )
}
