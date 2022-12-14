
import {  Link } from 'react-router-dom'
import { GetApiProducts} from '../../../Api/getApiProducts'
import { GetComanda } from './GetComanda'



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
          <GetComanda/>
        <Link to={'/AllOrder'}><button>Enviar Comanda</button></Link>
        </div>
        </div>
        </div>
    </div>
  )
}
