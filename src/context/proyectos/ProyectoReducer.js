import { FORMULARIO_PROYECTOS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTOS:
      return {
        ...state,
        formulario: true,
      };
    default:
      return state;
  }
};
