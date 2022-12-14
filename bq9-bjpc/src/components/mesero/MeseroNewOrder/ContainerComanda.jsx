
export const ContainerComanda = ({name, price}) => {
  
  return (
    <>
              
              <ul className="list-group list-group-flush">
                <li>{name} <span>${price}</span> </li>
              </ul>
        
    </>
  )
}
