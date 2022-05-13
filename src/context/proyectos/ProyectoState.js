import React, { useReducer } from "react";
import proyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import { FORMULARIO_PROYECTOS } from "../../types";

const proyectos = [
  { id: 1, nombre: "Tienda vitural" },
  { id: 2, nombre: "Intranet" },
  { id: 3, nombre: "Diseño de paginas Web" },
  { id: 4, nombre: "MERN" },
];

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [],
    formulario: false,
  };

  // dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  // serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTOS,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
