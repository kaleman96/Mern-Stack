import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const NuevoProyecto = () => {
  // obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // validar el proyecto1
    if (nombre === "") {
      mostrarError();
      return;
    }

    // agregar el state
    agregarProyecto(proyecto);

    // reiniciar el forn
    setProyecto({
      nombre: "",
    });
  };

  // Mostrar el Formulario
  const onClickFormulario = () => {
    mostrarFormulario();
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-block btn-primario"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">EL nombre del proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
