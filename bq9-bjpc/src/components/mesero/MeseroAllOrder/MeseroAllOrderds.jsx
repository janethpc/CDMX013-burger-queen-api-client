import {  Link } from 'react-router-dom'

export const MeseroAllOrder = () => {

  return (
    <>
       <h1>todas las ordenes</h1>
       <Link to={'/NewOrder'}><button>Nueva Orden</button></Link>
    </>
  )
}
