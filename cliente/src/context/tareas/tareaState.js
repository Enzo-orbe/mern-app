import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { v4 as uuidv4 } from "uuid";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "elegir plataforma", estado: true, proyectoID: 1 },
      { id: 2, nombre: "elegir productos", estado: false, proyectoID: 2 },
      { id: 3, nombre: "elegir forma de pago", estado: true, proyectoID: 3 },
      { id: 4, nombre: "elegir forma de envio", estado: true, proyectoID: 1 },
      { id: 5, nombre: "elegir cuantas cuotas", estado: false, proyectoID: 2 },
      {
        id: 6,
        nombre: "elegir color del producto",
        estado: true,
        proyectoID: 3,
      },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
  };

  //crear dispatch y el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //CREAR FUNCIONES
  //obtener las tareas de un proyecto en espefico
  const obtenerTareas = (proyectoID) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoID,
    });
  };

  //agregar una nueva tarea
  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //VALIDA Y MUESTRA UN ERROR EN CASO QUE SEA NECESARIO
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //eliminar tarea por id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //MODIFICAR EL ESTADO DE UNA TAREA
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //extrae una tarea para edicion
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //edita y modifica una tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  //Limpiar la tarea seleccionada una vez editada
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
