import React, { useState, createContext } from "react";


export const DataContext = createContext();

 const dataFixed = {
   nombre: "Carlos",
   edad: 35,
 };

 // se puede crear más de un componente Provider
export const DataProvider = ({children}) => {
     const [data, setData] = useState(dataFixed);

  return (
    <DataContext.Provider value={{
      data,
      setData
    }}>
    {children}
    </DataContext.Provider>
  )
}

