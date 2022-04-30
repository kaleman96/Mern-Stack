import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyecto = () => {
  const proyectos = [
    { nombre: "Tienda vitural" },
    { nombre: "Intranet" },
    { nombre: "Diseño de paginas Web" },
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyecto;
