import React, { Fragment, useContext } from "react";
import Tareas from "./Tareas";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //
  if (!proyecto) return <h1>Seleccione un proyecto</h1>;
  console.log(proyecto);
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir colores", estado: false },
    { nombre: "Elegir plataformas de pago", estado: false },
    { nombre: "Elegir hosting", estado: true },
  ];

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tareas tarea={tarea} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
