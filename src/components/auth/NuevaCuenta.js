import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NuevaCuenta() {
  // State para iniciar sesion
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // estraer de usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario inicia sesion
  const onSubmit = (e) => {
    e.preventDefault();

    // validar que no haya campos vacios

    // pasar el action
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Tu Nombre"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder=" Tu Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar"> Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder=" Repite tu password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesion"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesion
        </Link>
      </div>
    </div>
  );
}
