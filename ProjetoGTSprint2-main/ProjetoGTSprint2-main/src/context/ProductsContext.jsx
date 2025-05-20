import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext()


export const ProductsProvider = ({children}) => {
const [produtos, setProdutos] = useState([])


useEffect(()=> {
  axios.get('https://api-produtos-1-twyc.onrender.com/produtos')
    .then(data => 
        setProdutos(data.data)
    )
    .catch(err => 
      console.error("Erro ao buscar produtos:", err)
    )
}, [])
    
  return (
      <>
      <ProductsContext.Provider value={produtos}>
          {children}
      </ProductsContext.Provider>
      </>
    )
}
