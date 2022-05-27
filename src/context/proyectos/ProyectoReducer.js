import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTOS,
  OBTENER_PROYECTOS,
  PROYECTO_ACTUAL,
  VALIDAR_FORMULARIO,
  ELIMINAR_PROYECTO,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTOS:
      return {
        ...state,
        formulario: true,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorformulario: false,
      };

    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter(
          (proyecto) => proyecto.id === action.payload
        ),
      };

    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true,
      };

    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto.id !== action.payload
        ),
        proyecto: null,
      };
    default:
      return state;
  }
};
