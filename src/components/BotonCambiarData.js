import React, { useContext, Fragment } from "react";
import { DataContext } from "../context/DataContext";

const dataP = {
  nombre: "Pedro",
  edad: 30,
};

export const BotonCambiarData = () => {

  const {setData} = useContext(DataContext);
  
  const handleClick = () => {
      // dataP.edad += dataP.edad;
     setData(dataP);
  }

  return (
    <Fragment>
      
      <br />
      <hr />
      <button className="btn btn-primary" onClick={() => handleClick()}>
        Cambiar data
      </button>
    </Fragment>
  );
};

export default BotonCambiarData;








