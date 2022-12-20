import React from 'react'
import { ContainerOrders } from './ContainerOrders'

export const ResumPedidos = ({ordens}) => {
  return (
    <>
    <p/>
   
       
        
        {ordens.map(ord => (
            <>
            <div className='col-4'>
             <ContainerOrders 
             userid={ord.userid} 
             order={ord.order} 
             dateEntry={ord.dateEntry} 
            status={ord.status}
             />
             </div>
             <p/>
            </>
        ))

        }
        
    
    </>
  )
}
