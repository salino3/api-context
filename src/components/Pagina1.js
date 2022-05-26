import React, { useContext, Fragment } from "react";
import { DataContext } from "../context/DataContext";
import BotonCambiarData from './BotonCambiarData';
const Pagina1 = () => {

  const { data } = useContext(DataContext);

  return (
    <Fragment>
      <h1>Hola mundo desde Pagina1</h1>
      <hr />
      <h4>Trabajador actual: </h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <BotonCambiarData /> {/* se puede pegar el componente, sin dependencias */ }
    </Fragment>
  );
}

export default Pagina1