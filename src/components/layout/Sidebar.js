import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyecto from "../proyectos/ListadoProyecto";

function Sidebar() {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
        <NuevoProyecto />
      </h1>
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListadoProyecto />
      </div>
    </aside>
  );
}

export default Sidebar;
