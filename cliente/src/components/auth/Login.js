import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  //extraer email y password de usuario
  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //cunado el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    //validar que no haya campos vacios

    //pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombre-dark">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={onSubmit}>
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
              placeholder="Coloca tu password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block "
              value="Iniciar Sesion"
            />
          </div>
          <Link to={"/nueva-cuenta"} className="enlace-cuenta">
            Obtener Cuenta
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
