import { useEffect, useState } from "react"
import Axios from 'axios'
import { ContainerCard } from "../components/mesero/MeseroNewOrder/ContainerCard"

export const GetApiProducts = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        Axios.get('https://6387d97cd94a7e50408eaddc.mockapi.io/product')
        .then(response => {
            setProductos(response.data)
        })
        .catch(function (error) {
            // handle error
            setProductos(error);
          })
    }, [])
    return (
        <>
        <div key={productos.id}>
        <ContainerCard productos={productos}/>
        </div>
        </>
        
    )
}
