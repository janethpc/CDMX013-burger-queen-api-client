
import { useState } from "react"
import { ContainerComanda } from "./ContainerComanda";



export const GetComanda = () => {

  const [contador, setContador] = useState(0);

 
  const handleClick = () => {
    setContador(contador + 1)
  }

  return (
    <>
      
      <ContainerComanda contador={contador}/>
      <p>{contador}</p>
      <button onClick={handleClick}>Add</button>
    
    </>
  )
}
