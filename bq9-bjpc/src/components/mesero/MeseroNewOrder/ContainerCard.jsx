import { CardProducts } from "./CardProducts"

export const ContainerCard = ({productos}) => {
  return (
    <>
        {productos.map(product => (
        <>
        <CardProducts 
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            
        />
        </>
        )
    )}

    </>
  )
}
