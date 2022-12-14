
import {  Link } from 'react-router-dom'
import { GetApiProducts} from '../../../Api/getApiProducts'
import {ContainerComanda} from './ContainerComanda'

export const MeseroNewOrder = () => {
  

  return (
    <div>
        <h1>Productos</h1>
        <div className="container text-center">
          <div className='row justify-content-start'>
        <GetApiProducts/>
        </div>
        <Link to={'/AllOrder'}><button>Enviar Comanda</button></Link>
        </div>
    </div>
  )
}
