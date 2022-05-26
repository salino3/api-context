import React, { useContext, Fragment } from "react";
import {DataContext} from "../context/DataContext";

// import BotonCambiarData from "./BotonCambiarData";;

const Pagina2 = () => {

    const {data} = useContext(DataContext)
    
  return (
    <Fragment>
      <h1>Página 2</h1>
      <hr />
      <h4>Trabajador actual: </h4>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <BotonCambiarData setData={setData} /> */}
    </Fragment>
  );
}

export default Pagina2













