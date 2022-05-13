import React, { useContext } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos } = proyectosContext;

  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyectos.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyecto;
