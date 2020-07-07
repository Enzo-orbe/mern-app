import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //Obtener state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //state del proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //extraer el nombre del proyecto
  const { nombre } = proyecto;

  //lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario envia el proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //agregar al state
    agregarProyecto(proyecto);
    //reiniciar el form
    guardarProyecto({
      nombre: " ",
    });
  };

  //mostrar el formulario
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
            name="nombre"
            placeholder="Nombre Proyecto"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            value="Agregar Proyecto"
            className="btn btn-block btn-primario"
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
