import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import FormTareas from "../tareas/FormTareas";
import ListadoTareas from "../tareas/ListadoTareas";

export default function Proyectos() {
  return (
    <div className="contenedor-app">
      <aside>
        <Sidebar />
      </aside>
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTareas />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
}
