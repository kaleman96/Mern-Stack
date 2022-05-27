import React, { useReducer } from "react";
import proyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import { v4 as uuidv4 } from "uuid";
import {
  FORMULARIO_PROYECTOS,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda vitural" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de paginas Web" },
    { id: 4, nombre: "MERN" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
  };

  // dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  // serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTOS,
    });
  };

  // obtener proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  // agregar proyectos
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  const proyectoActual = (proyecto) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyecto,
    });
  };

  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
