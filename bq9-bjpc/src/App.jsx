import { useState } from "react"
import { RouterAuth } from "./routs/auth"
import { RouterNoAuth } from "./routs/NoAuth"
import { RouterProvider} from "react-router-dom";


export const App = () => {
  const [user, setuser] = useState({'mail':'prueba@mesero.com'})
  
  return (
    <>
     {user? <RouterProvider router={RouterAuth} />:<RouterProvider router={RouterNoAuth} />}
      

    </>
  )
}


