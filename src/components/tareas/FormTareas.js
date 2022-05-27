import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const FormTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  if (!proyecto) return null;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-submit btn-primario btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTareas;
