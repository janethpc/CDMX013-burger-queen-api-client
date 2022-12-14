
import {  Link } from 'react-router-dom'
import { GetApiProducts} from '../../../Api/getApiProducts'
import {  Comanda } from './Comanda'


export const MeseroNewOrder = () => {
  
  return (
    <div>
        <h1>Productos</h1>
        <div className="container text-center">
          <div className='row justify-content-start'>
            <div className='col'>
        <GetApiProducts/>
        </div>
        <div className='col'>
          {/*aqui ira getcomanda*/}
          <Comanda/>
        <Link to={'/AllOrder'}><button>Enviar Comanda</button></Link>
        </div>
        </div>
        </div>
    </div>
  )
}
